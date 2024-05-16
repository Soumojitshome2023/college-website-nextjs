const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    contact : {
        type : String,
        required : true,
        unique : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    refreshToken : String
},{timestamps : true})

module.exports = mongoose.model("Admin",adminSchema);