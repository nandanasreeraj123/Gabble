const Comment=require('../models/comments');
const db=require('../models/index.js');
const User = db.users;
const Post=db.posts;
const Like=db.likes;

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
    try{
        const allpost = await Post.findAll({
        });
        if (allpost) {
            return res.status(200).json({allpost});
        }
        return res.status(404).send("couldnt find");
    }catch(err){
        return res.status(500).send(error.message);
    }
}

//TODO:  /posts/findByUserId/:id
module.exports.findByUserId=async function(req,res){
    try{
        const post = await Post.findAll({
            where: { userId: req.params.id }
        });
        if (post) {
            return res.status(200).json({post});
        }
        return res.status(404).send("Post with the specified userid does not exists");
    }catch(err){
        return res.status(500).send(error.message);
    }
}

//TODO: 
module.exports.deleteOne=async function(req,res){

}

module.exports.likes=async function(req,res){
    try{
        Like.create({
            userId:req.body.userId,
            postId:req.body.postId
          }).then(async function(like){
            try{
                    Post.increment({likes: 1}, { where: { id: req.body.postId } })
                    return res.status(200).json({like});
                }catch(err){
                return res.status(500).send(err.message);
            }
          }).catch(function(error){
              console.log("$$\n",error);
              return res.status(500).send(error.message);
            })
    }catch(err){
        return res.status(404).send("Some other");
    }
}