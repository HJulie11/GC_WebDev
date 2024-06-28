import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
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
    institute: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
})

const usermodel = mongoose.models.user || mongoose.model('user', userSchema);

export default usermodel;