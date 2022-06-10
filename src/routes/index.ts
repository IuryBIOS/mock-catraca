import express from "express";
import { loginController } from "../controllers";

const router = express.Router();

router.post("/login.fcgi", loginController);

export default router;
