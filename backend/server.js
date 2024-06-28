import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'

// APP CONFIG
const app = express()
const port = 4000
 
//MIDDLEWARE
app.use(express.json())
app.use(cors())
 
// DB CONNECTION
connectDB()

app.use('/api/user', userRouter) // require('./routes/userRoute.js')

app.get('/', (req, res) => {
    res.send('API Working')
})
 
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://gyeongcheong23:OMIM5vasaz7gnC84@cluster0.d8iwxjc.mongodb.net/?
