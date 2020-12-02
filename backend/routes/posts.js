const express=require('express');
const router=express.Router();
const passport=require('passport');
const postController=require('../controllers/posts_controller');

// router.post('/create',passport.checkAuthentication,postController.create);
// router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);

/* * * * ROUTES TO IMPLEMENT * * */
// router.post('/create',postController.create);   
// router.get('/destroy/:id',postController.destroy); 
// router.get('/findAll',postController.findAll);
// router.get('/findOne/:id',postController.findOne);
// router.get('/deleteOne/:id',postController.findOne);
/* * * * END ROUTES * * * */

module.exports=router;