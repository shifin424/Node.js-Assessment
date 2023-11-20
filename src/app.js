import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import morgan from 'morgan';
import helmet from 'helmet'
import cors from './middleware/security/cors.js';
import connectionDatabase from './config/database.js'
import router from "./routes/productRoutes.js"
import errorHandler from "./middleware/error/errorHandler.js"

const app = express();

app.use(cors)
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan("dev"))
connectionDatabase();

app.use('/api/v1', router)
app.use(errorHandler)

app.use((res, req) => {
    res.status(400).json({ success: false, status: 404, message: "Not Found" })
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`The server conncetion is now established and running on the port ${port}`)
})
