import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
        required: true
    },
    group: {
        type: String,
        required: true
    },
    studentlist: {
        type: [String], // parser is needed to get string from the uploaded csv file.
        // required: false
    },
    groupadmin: {
        type: [String], // parser is needed to get string from the uploaded csv file.
        // required: false
    },
})

const adminmodel = mongoose.models.admin || mongoose.model('admin', adminSchema);

export default adminmodel;