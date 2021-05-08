//  route for post data

const express=require('express');
const router=express.Router();
const post_data_controller=require('../controllers/inquiry_controller');


router.get('/inquiry_data',post_data_controller.home_inquiry);

module.exports=router;
