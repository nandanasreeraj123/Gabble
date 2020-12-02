const User=require('../models/user');
const jwt=require('jsonwebtoken');

// get for /users/profile/:id
module.exports.profile=async function(req,res){
    try{
        const user = await User.findOne({
            where: { userid: req.params.id }
        });
        if (user) {
            return res.status(200).json({user});
        }
        return res.status(404).send("User with the specified userid does not exists");
    }catch(err){
        return res.status(500).send(error.message);
    }
};
// get for /users/profile/:id
// post for /users/update/:id
// get for /users/sign-up
// get for /users/sign-in
// post for /users/create
// get for /users/sign-out

// authhentication
module.exports.createSession=async function(req,res){
    try{
        let user = await User.findOne({
            where: {username:req.body.username}
        });

        if(!user||user.password!=req.body.password){
            return res.json(422,{
                message:"Invalid username or password"
            })
        }
    
        return res.json(200,{
            message:"Sign in successful, here is your token, please keep it safe!",
            data:{
                token:jwt.sign(user.toJSON(),'socialnetwork',{expiresIn:'100000'})
            }
        })
    }catch(err){
        console.log('****',err);
        return res.json(500,{
            message:"Internal Server Error"
        });
    }
}