const express = require("express");

const router = express.Router();


// Import Controller
const {createComment} = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");

// Mapping Creation

router.post("/comment/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlikes", unlikePost);


// Exporting

module.exports = router;