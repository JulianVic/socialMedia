import { Router } from "express";
import commentController from "../controllers/commentController.js";
import postController from "../controllers/postController.js";

const router = Router();

router.post("/create/:userID", commentController.createComment);
router.get("/:postID", commentController.readComments);
router.put("/update/:commentID", commentController.updateComment);
router.delete("/delete/:commentID", postController.deletePost)

export default router;