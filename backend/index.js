const express=require("express");
const app=express();
const userRoutes=require("./routes/userRoutes");
const postRoutes=require("./routes/postRoutes")
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const SECRET="app";
const cors=require("cors");

app.use(cors())
mongoose.connect("mongodb://localhost:27017/instagram");

// mongoose.connect("mongodb+srv://ma:ma@cluster0.f0sct.mongodb.net/ECommerce?retryWrites=true&w=majority")

mongoose.connection.once('open', function () {
    console.log('Database connected Successfully');
}).on('error', function (err) {
    console.log('Error', err);
})

// app.get("",(req,res)=>{
//     res.send("hello world")
// })

app.use("",userRoutes);

app.use("/post", (req, res, next) => {
    const token = req.headers.authorization.split("test ")[1];
    // console.log(req.headers.authorization.split("test ")[1])
    if (!token) {
        return res.status(404).json({
            status: "failed",
            message: "token is missing"
        })
    }
    // jwt verify token
    jwt.verify(token, SECRET, async function (err, decoded) {
        if (err) {
            return res.status(404).json({
                status: "failed",
                message: "invaild token"
            })
        }
        req.user = decoded.data;
        next();
    })
})

app.use("/post",postRoutes);

app.get("/",(req,res)=>{
    res.send("ok")
})

const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>console.log(`server at ${PORT}`));