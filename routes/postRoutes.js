import { Router } from "express";
const router = Router();

import {
  fetchPosts,
  fetchPostById,
  createPost,
  deletePost,
  updatePost,
} from "../controller/postController.js";

router.post("/createPost", createPost);
router.put("/updatePost/:id", updatePost);
router.get("/fetchPosts", fetchPosts);
router.get("/fetchPostById/:id", fetchPostById);
router.delete("/deletePost/:id", deletePost);

export default router;
