import express from "express";
import { ScoresController } from "../controllers/scores.js"

const router = express.Router();

router.get("/", ScoresController.Index);

export default router;