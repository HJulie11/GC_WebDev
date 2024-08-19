import adminModel from "../models/adminmodel.js"
import userModel from "../models/usermodel.js"
import csv from "csv-parser"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import fs from "fs"
import path from "path"

//LOGIN ADMIN
const loginAdmin = async (req,res) => {
    const {email, password} = req.body;
    try {
        const admin = await adminModel.findOne({email})
        const name = admin.name;

        if (!admin) {
            return res.json({success:false, message: "Admin does not exist"});
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.json({success:false, message: "Invalid credentials"});
        }

        // CREATE TOKEN IF PASSWORD MATCHES
        const token = createToken(admin._id);
        res.json({success:true, token, name, email});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Something went wrong"});
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

const parseCSVFile = async (filePath) => {
    const results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

//REGISTER ADMIN
const registerAdmin = async (req, res) => {
    // const {adminname, email, password, mobilenumber, address, institute, group} = req.body;
    const { adminname, email, password, mobilenumber, address, institute, group } = req.body;
    const studentlistFile = req.file('studentlist');
    const groupadminFile = req.file('groupadmin');

    try {

        if (!studentlistFile || !groupadminFile) {
            return res.json({success:false, message: "Student list and group admin list are required"});
        }

        // CHECK IF ADMIN EXISTS
        const exists = await adminModel.findOne({email});
        if (exists) {
            return res.json({success:false, message: "Admin already exists"});
        }

        // VALIDATE EMAIL AND PASSWORD STRENGTH
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Enter a valid email"});
        }

        if (password.length < 8) {
            return res.json({success:false, message: "Password is too short"});
        }

        // HASHING PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // register date
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}.${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${currentDate.getDate().toString().padStart(2, '0')}`;


        const newAdmin = new adminModel({
            adminname: adminname,
            email: email,
            password: hashedPassword,
            mobilenumber: mobilenumber,
            address: address,
            position: '총괄관리자',
            registerDate: formattedDate,
            institute: institute,
            group: group,
            studentlist: studentlist,
            studentnumber: 0,
            groupadmin: groupadmin
        })

        // SAVE ADMIN
        const savedAdmin = await newAdmin.save();
        
        let studentCount = 0;
        if (req.files['studentlist']) {
            // const studentlistPath = req.files['studentlist'][0].path;
            // const students = await parseCSVFile(studentlistPath);
            const students = await parseCSVFile(studentlistFile.path);
            studentCount = students.length;
            await registerUsers(students, savedAdmin.group);
            savedAdmin.studentlist = students;
            savedAdmin.studentnumber = studentCount;
            await savedAdmin.save();
        }

        if (req.files['groupadmin']) {
            // const groupadminPath = req.files['groupadmin'][0].path;
            const groupadmins = await parseCSVFile(groupadminFile.path);
            await registerAdmins(groupadmins, savedAdmin.institute);
            savedAdmin.groupadmin = groupadmins;
            await savedAdmin.save();
        }

        const token = createToken(savedAdmin._id);
        res.json({success:true, token});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Something went wrong"});
    }
}

// Register users from csv
const registerUsers = async (users, group) => {
    for (const user of users) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const newUser = new userModel({
                name: user.name,
                email: user.email,
                password: hashedPassword,
                dateofbirth: user.dateofbirth,
                mobilenumber: user.mobilenumber,
                gender: user.gender,
                address: user.address,
                institute: user.institute,
                group: group,
            });
            await newUser.save();
        } catch (error) {
            console.error('Error registering user:', error);
        }
    }
}

// Register group admins from csv
const registerAdmins = async (admins, institute) => {
    for (const admin of admins) {
        try {
            const hashedPassword = await bcrypt.hash(admin.password, 10);
            const newAdmin = new adminModel({
                adminname: admin.adminname,
                email: admin.email,
                password: hashedPassword,
                mobilenumber: admin.mobilenumber,
                address: admin.address,
                position: '그룹관리자',
                registerDate: new Date().toISOString(),
                institute: institute,
                group: admin.group,
            });
            await newAdmin.save();
        } catch (error) {
            console.error('Error registering group admin:', error);
        }
    }
}

export { loginAdmin, registerAdmin }