const express = require("express");
const app=express();
const port =8000;
const User = require("./db/user");
const cors = require("cors")


app.use(express.json());
app.use(cors());
const dbConnect = require("./db/dbConnection");
dbConnect();


app.listen(port,()=>{
    console.log("app has startedcc");
})
// register
app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({
                error: "Username and password are required"
            });
        }

        console.log(req.body);
        // const user = new User({ username, password });
        // await user.save();
        const result = await User.insertOne({ username, password });
        console.log("Inserted user:", result.ops[0])

        res.status(201).json({
            message: "Successfully registered"
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            error: "Registration failed"
        });
    }
});


// login
app.post("/login",async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user =await User.findOne({username});
        if(!user){
            res.status(500).json({
                error:"user not registered"
            })
        }

        if(user.password!==password){
            res.status(500).json({
                error:"password incoreect"
            })
        }
        res.status(201).json({
            meaagage:"succesfully login"
        })

    }
    catch(error){
        res.status(500).json({
            error:"login failed"
        })
    }
})
