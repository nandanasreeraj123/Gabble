const express=require('express');
const router=express.Router();
const { authJwt } = require("../middleware");
const userController=require('../controllers/users_controllers');

router.use(function(req, res, next) {
  // inject default headers
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

//router.get('/profile/:id',passport.checkAuthentication,userController.profile);
//router.post('/update/:id',passport.checkAuthentication,userController.update);

/* * * * ROUTES TO IMPLEMENT * * */
router.get('/',userController.home);   //localhost:5000/users/
router.post('/sign-up',userController.signUp);//localhost:5000/users/sign-up
router.post('/sign-in', userController.signIn);//localhost:5000/users/sign-in
router.post('/create',userController.create);//localhost:5000/users/create
router.get('/profile/:id',userController.profile);  //localhost:5000/users/profile/3
router.get('/findAll',userController.findAll);
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

// module.exports = function(app) {
//     app.use(function(req, res, next) {
//       res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//       );
//       next();
//     });  
//     app.get(
//       "/",
//       [authJwt.verifyToken],
//       userController.home
//     );
//   };