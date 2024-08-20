import adminModel from "../models/adminmodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { response } from "express"

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

//REGISTER ADMIN
const registerAdmin = async (req, res) => {
    const {adminname, email, password, dateofbirth, mobilenumber, address, institute, group, studentlist, groupadmin } = req.body;
    try {
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

        const newAdmin = new adminModel({
            adminname: adminname,
            email: email,
            password: hashedPassword,
            dateofbirth: dateofbirth,
            mobilenumber: mobilenumber,
            address: address,
            institute: institute,
            group: group,
            studentlist: studentlist,
            groupadmin: groupadmin
        })

        const admin = await newAdmin.save();
        const token = createToken(admin._id);
        res.json({success:true, token});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Something went wrong"});
    }
}

export { loginAdmin, registerAdmin }