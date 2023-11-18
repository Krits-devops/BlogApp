// import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req,res) => {
    try{
        // fetch data from req body
        const {post,user,body} = req.body;
        // create a comment
        const comment = new Comment({
            post,user,body
        });

        // save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID and the new comment will be updated in the comment array of Post

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}},{new: true})
        .populate("comments") // populate comments array with comment document.
        .exec(); // to start executing the populate function.

        res.json({
            post: updatedPost,
        })
 
    }
    catch(error){
        return res.status(500).json({
            error: "Error while creating Comment",
        });
        
    }
}