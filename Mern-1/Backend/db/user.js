const mongoose = require("mongoose")
const UserSchemaa = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const User = mongoose.model("User",UserSchemaa)
module.exports=User;