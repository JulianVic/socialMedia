import express from "express";
import { cxn } from "./db/connection.js";
import postRouter from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";
import commenRouter from "./routes/commentRoutes.js"
import cors from "cors";

cxn();

const app = express();
const port = 4000

app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/comments", commenRouter);

app.listen(port, () => { 
    console.log("Servidor corriendo en el puerto", port)
})