import express from 'express'
import routes from './routes/index.js'
import mongoose from 'mongoose'
import cors from 'cors';
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload"

// to initiaize the app
const app = express()

//to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/webscout');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
app.use(cookieParser());

routes.configureRoutes(app);
export default app;