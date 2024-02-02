const mongoose=require('mongoose');
const regionModel=require('./regionModel');
const fishSchema=new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        trim:true,
        default:"",
        unique:true
    },
    Region_id:{
        type:mongoose.Types.ObjectId,
        ref:regionModel,
        trim:true,
    }
    },{
        timestamps:true
    })

    module.exports=mongoose.model('fishes',fishSchema);;