import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        // required: true
    },
    group: {
        type: String,
        // required: true
    },
    studentlist: {
        type: [String], // parser is needed to get string from the uploaded csv file.
        required: true
    },
    groupadmin: {
        type: [String], // parser is needed to get string from the uploaded csv file.
        required: true
    },
})

const usermodel = mongoose.models.user || mongoose.model('user', userSchema);

export default usermodel;