const express=require('express');
const router=express.Router();

router.use('/users',require('./users')); //localhost:5000/users
// router.use('/posts',require('./posts'));  //localhost:5000/posts
// router.use('/comments',require('./comments'));

module.exports=router;