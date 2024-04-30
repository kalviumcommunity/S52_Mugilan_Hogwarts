import dotenv from "dotenv"
dotenv.config()
import express from "express"
export const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"

app.use(express.json({limit:"50mb"}))

app.use(cookieParser())


app.use(cors({
    origin:process.env.ORIGIN
}))

app.get('/test',(req,res) => {
    res.status(201).json(
        {
            success:true,
            message: "test api response"
        }
    )
})