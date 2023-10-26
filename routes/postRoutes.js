import { Router } from "express";
import postController from "../controllers/postController.js";

const router = Router();

router.post("/create/:userID", postController.createPost);
router.get("/:userID", postController.readPosts);
router.put("/update/:postID", postController.updatePost);
router.delete("/delete/:postID", postController.deletePost);

export default router;