import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { response } from "express";

// LOGIN USER
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})
        const name = user.name;

        if (!user) {
            return res.json({success:false, message: "User does not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success:false, message: "Invalid credentials"});
        }

        // CREATE TOKEN IF PASSWORD MATCHES
        const token = createToken(user._id);
        res.json({success:true, token, name, email});

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Something went wrong"});
    }
    

}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

//REGISTER USER
const registerUser = async (req, res) => {
    const {fullname , email, password, dateofbirth, mobilenumber, gender, address, institute, group} = req.body;
    try {
        // CHECK IF USER EXISTS
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false, message: "User already exists"});
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

        const newUser = new userModel({
            fullname: fullname,
            email: email,
            password: hashedPassword,
            dateofbirth: dateofbirth,
            mobilenumber: mobilenumber,
            gender: gender,
            address: address,
            institute: institute,
            group: group
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, token});
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Something went wrong"});
    }

}

// GET USER PROFILE
const getUserProfile = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        if (user) {
            res.json({
                fullname: user.fullname,
                email: user.email,
                password: user.hashedPassword,
                dateofbirth: user.dateofbirth,
                mobilenumber: user.mobilenumber,
                gender: user.gender,
                address: user.address,
                institute: user.institute,
                group: user.group
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};


export { loginUser, registerUser, getUserProfile };
