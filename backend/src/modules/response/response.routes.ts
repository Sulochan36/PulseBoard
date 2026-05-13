import express from "express";
import { getPollAnalyticsController, submitResponseController } from "./response.controller.js";

const router = express.Router();

router.post("/", submitResponseController);
router.get("/poll/:pollId/analytics",getPollAnalyticsController);

export default router;