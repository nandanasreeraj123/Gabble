const db=require('../models/index.js');
const User = db.users;
const jwt=require('jsonwebtoken');

// get for /users
module.exports.home=function(req,res){
    return res.status(200).send("Hello world");
}
// get for /users/profile/:id
module.exports.profile=async function(req,res){
    try{
        const user = await User.findOne({
            where: { id: req.params.id }
        });
        if (user) {
            return res.status(200).json({user});
        }
        return res.status(404).send("User with the specified userid does not exists");
    }catch(err){
        return res.status(500).send(error.message);
    }
};
// post for /users/update/:id
// get for /users/sign-up
// get for /users/sign-in
// post for /users/create
module.exports.create=async function(req,res){
    try{
            // if(req.body.password!=req.body.confirm_password){
            //     return res.status(401).send("Incorrect username/password");
            // }
            const user = await User.findOne({
                where: { email: req.body.email }
            });
            if (user) {
                //user already exists
                return res.status(404).send("User already exists");
            }else{
                User.create(req.body).then(function(user){
                    return res.status(200).json({user});
                }).catch(function(error){
                    return res.status(404).send("User not found during sign up");
                })
            }
    }catch(err){
        return res.status(500).send(err.message);
    }
}
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