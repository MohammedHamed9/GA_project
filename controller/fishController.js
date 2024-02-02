const Fish=require('../models/fishModel');
const Region=require('../models/regionModel');
const fishController=
{
    createFish:async(req,res)=>{
        try{
        const Region_id=req.body.Region_id;
        if(!Region_id){
            return res.status(500).json({
                meassage:'the region id field if required!'
            });
            }
        const region=await Region.findById(Region_id);
        if(!region){
        return res.status(500).json({
            meassage:'the region with that id is not exist !'
        });
        }
        const fish=await Fish.create(req.body);
        res.status(201).json({
            fish,
            message:"the fish is created..."
        })
    }catch(err){
        res.status(500).json({
            meassage:err.meassage
        });
    }
    },
    getAllFishes:async(req,res)=>{
        const fishes= await Fish.find();
        res.status(200).json({
            data:fishes,
        })
    },
    getAFish:async(req,res)=>{
        const fish= await Fish.findById(req.params.id);
        res.status(200).json({
            data:fish,
        })
    },
    getFishByRegionId:async(req,res)=>{
        try{
        const fish= await Fish.find({Region_id:req.params.id}).populate("Region_id","_id name");
        if(fish.length==0){
        return res.status(500).json({
            meassage:'there\'s no fishs within that region id !'
        });
        }
        res.status(200).json({
            data:fish,
        })
    }catch(err){
        res.status(500).json({
            meassage:err.meassage
        });
    }
    },
    deleteAllFish:async(req,res)=>{
        try{
        await Fish.deleteMany();
        res.status(200).json({
            message:'all fishes are deleted..',
        })
    }catch(err){
        res.status(500).json({
            meassage:err.meassage
        });
    }
    },
}
module.exports=fishController;