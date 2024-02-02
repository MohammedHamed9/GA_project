const Region=require('../models/regionModel')
const regionCtrl={
    createRegion:async(req,res)=>{
    try{
        const fishSpecies=req.body.fishSpecies||null;
    const region=await Region
    .create({name:req.body.name,fishSpecies});
        res.status(201).json({
            message:"the region is created..",
            region
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}
}
module.exports=regionCtrl;