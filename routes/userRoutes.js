import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/create", userController.createUser);
router.get("/", userController.readUsers);
router.get("/user", userController.searchUser);

export default router;