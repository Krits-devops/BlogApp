const express = require("express");

const router = express.Router();


// Import Controller
const {createComment} = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likes } = require("../controllers/likeController");

// Mapping Creation

router.post("/comment/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes", likes);

// Exporting

module.exports = router;