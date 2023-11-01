import BookRoutes from "./routes/router.js"
import colors from "colors"
import { connectDB } from "./db/db.js"
import cors from "cors"
import express from "express"
import formidable from "express-formidable"
import morgan from 'morgan'

// import multer from "multer"

const app = express();

connectDB()

app.use(formidable())
app.use(cors());
app.use(express.json());
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname); 
//     },
//   });
  
//   const upload = multer({ storage: storage });
  
//   app.use(upload.single("photo"));

app.use(morgan('dev'))
app.use(
    express.urlencoded()
);
app.use('/api/v1/books',BookRoutes)

app.listen(8080,()=>{
    console.log("Working on PORT 8080".bgGreen)
})