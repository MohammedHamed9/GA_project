const express=require('express');
const router=express.Router();
const regionCtrl=require('../controller/regionController')
router.post('/createRegion',regionCtrl.createRegion);
module.exports=router;