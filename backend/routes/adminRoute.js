import express from 'express'; 
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';
import adminModel from '../models/adminmodel.js';
import multer from 'multer';
import authMiddleware from '../middleware/auth.js';

const adminRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${file.originalname}`); // Appending extension
    }
});

const upload = multer({ storage: storage });

adminRouter.post('/register', registerAdmin);
adminRouter.post('/login', loginAdmin);

//TODO: upload audio file for user

export default adminRouter;
