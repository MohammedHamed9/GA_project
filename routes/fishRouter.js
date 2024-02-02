const express=require('express')
const router=express.Router();
const fishController=require('../controller/fishController');
router.get('/getAllFishs',fishController.getAllFishes);
router.get('/getAFish/:id',fishController.getAFish);
router.get('/getFishByRegionId/:id',fishController.getFishByRegionId);
router.post('/createFish',fishController.createFish);
router.delete('/deleteAllFish',fishController.deleteAllFish);

module.exports=router;