import express from "express";
import { cxn } from "./db/connection";
import funcRouter from "./routes/postRoutes"
import cors from cors;

cxn();

const app = express();
const port = 4000

app.use(express.json());

app.use("/api/posts", funcRouter)

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto", port)
})