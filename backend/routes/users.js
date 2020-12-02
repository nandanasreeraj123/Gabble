const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controllers/users_controller');

// router.get('/profile/:id',passport.checkAuthentication,userController.profile);
// router.post('/update/:id',passport.checkAuthentication,userController.update);

/* * * * ROUTES TO IMPLEMENT * * */
router.get('/',userController.home);
// router.get('/sign-up',userController.signUp);
// router.get('/sign-in',userController.signIn);
router.post('/create',userController.create);
router.get('/profile/:id',userController.profile); 
// router.get('/findAll',userController.findAll);
// router.get('/findOne/:id',userController.findOne);
// router.post('/update/:id',userController.update);
// router.get('/deleteOne/:id',userController.deleteOne);
/* * * * END ROUTES * * * */


// //use passport as middleware to authenticate
// router.post('/create-session',passport.authenticate(
//     'local',
//     {failureRedirect:'/users/sign-in'}
// ),userController.createSession);

// router.get('/sign-out',userController.destroySession);

module.exports=router;