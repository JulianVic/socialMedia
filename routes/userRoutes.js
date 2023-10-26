import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/create", userController.createUser);
router.get("/", userController.readUsers);

export default router;