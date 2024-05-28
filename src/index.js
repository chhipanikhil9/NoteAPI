const express = require("express");
const app = express();
const userRouter = require("./routes/userroutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors");


dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/note",noteRouter);

const PORT = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send("NOTES API");
});

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("Server extablished on port " + PORT);
    });
}).catch((e)=>{
    console.log("Connection not extablished!");
})

