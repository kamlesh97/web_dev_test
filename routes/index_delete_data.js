//  riute for deletion


const express=require('express');
const router=express.Router();
const homeController=require('../controllers/delete_data_controller');



router.get('/delete_data',homeController.home_delete);

module.exports=router;