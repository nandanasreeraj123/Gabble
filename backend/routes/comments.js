const express=require('express');
const router=express.Router();
const passport=require('passport');
const commentController=require('../controllers/comments_controller');

// router.post('/create',passport.checkAuthentication,commentController.create);
// router.get('/destroy/:id',passport.checkAuthentication,commentController.destroy);

/* * * * ROUTES TO IMPLEMENT * * */
// router.post('/create',commentController.create);
// router.get('/destroy/:id',commentController.destroy);
// router.get('/findAll/:postId',commentController.findAll);
// router.get('/findOne/:id',commentController.findOne);
// router.get('/deleteOne/:id',commentController.findOne);
/* * * * END ROUTES * * * */

module.exports=router;
