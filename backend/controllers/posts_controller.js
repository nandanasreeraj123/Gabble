const Comment=require('../models/comments');
const db=require('../models/index.js');
const User = db.users;
const Post=db.posts;

console.log("\nuser is ",User);
console.log("\npost is ",Post);
//TODO: 
module.exports.create=async function(req,res){
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const userId = req.body.userId ;
    console.log("inside request /posts/create -> userId is",userId);
    try{
        Post.create({
            title:title,
            body: description,
            image:image,
            userId:userId
          }).then(function(post){
              return res.status(200).json({post});
          }).catch(function(error){
              console.log("$$\n",error);
              return res.status(500).send(error.message);
            })
    }catch(err){
        return res.status(404).send("User not found during sign up");
    }
}

//TODO: 
module.exports.destroy=async function(req,res){
    
    try{
        // let post= await Post.findById(req.params.id);

    }catch(err){

    }
}

//TODO: 
module.exports.findAll=async function(req,res){

}

//TODO: 
module.exports.findOne=async function(req,res){

}

//TODO: 
module.exports.deleteOne=async function(req,res){

}