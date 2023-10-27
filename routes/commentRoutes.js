import { Router } from "express";
import commentController from "../controllers/commentController.js";
const router = Router();

router.post("/create/:userID", commentController.createComment);
router.get("/:postID", commentController.readComments);
router.put("/update/:commentID", commentController.updateComment);
router.delete("/delete", commentController.deleteCommentByDate)
router.delete("/delete/:postID", commentController.deleteCommentByPost)
export default router;