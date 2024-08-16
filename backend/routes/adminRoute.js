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
adminRouter.get('/myaccount', authMiddleware, async (req, res) => {
    try {
      const userId = req.body.userId;
      console.log('Fetching user details for user:', userId);
      if (!userId) {
        return res.status(400).json({ error: 'User ID is missing' });
      }
      const user = await adminModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      console.log('User found:', user);
      res.status(200).json({ success:true, 
        adminname: user.adminname,
        email: user.email,
        dateofbirth: user.dateofbirth,
        mobilenumber: user.mobilenumber,
        address: user.address,
        institute: user.institute,
        group: user.group,
        studentlist: user.studentlist,
        groupadmin: user.groupadmin
       });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
//TODO: upload audio file for user

export default adminRouter;
