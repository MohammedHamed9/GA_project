const mongoose=require('mongoose');
const fishModel = require('./fishModel');
const regionSchema=new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
    },{
        timestamps:true
    })

    module.exports=mongoose.model('regions',regionSchema);