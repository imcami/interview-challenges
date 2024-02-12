import { Router } from "express";
import apiRouter from "./apirouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use(apiRouter);

export default router;
