const Post  = require("../models/postModel")

exports.createPost = async (req,res) =>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title,body,
        });
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });
    }

    catch(error){
        return res.status(400).json({
            error : "Error while creating post",error
        });
        console.log(error);
    }
};

exports.getAllPosts = async (req,res) =>{
    try{
        const post = await Post.find()
        res.json({
            post,
        })
    }
    catch(error){
        return res.status(400).json({
            error : "Error while creating post",error
        });
    }
}