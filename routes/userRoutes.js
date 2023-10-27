import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/create", userController.createUser);
router.get("/", userController.readUsers);
router.get("/user", userController.searchUser);
router.delete("/delete/:id", userController.deleteUser);

export default router;