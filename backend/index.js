import express from "express";
import mongoose from "mongoose";
import { PORT , mongoDBURL} from "./config.js";
import bookRouter from "./router/bookRouter.js"
import cors from 'cors'


const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware cors
//option-1 Allow all orginis with deafult of  cors(*)
// app.use(cors())

//Option-2 Allow Custom origins
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}))

app.get('/', (req,res)=>{
    console.log(req);
    return res.status(234).send("welcome sir")
});

app.use('/books', bookRouter)

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("Data base is conntected");
    app.listen(PORT, ()=>{
        console.log(`Server running @ ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})