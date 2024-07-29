import express from 'express';
import { loginUser, registerUser, getUserProfile } from '../controllers/usercontroller.js';
 
const userRouter = express.Router();
 
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', getUserProfile);
 
export default userRouter;