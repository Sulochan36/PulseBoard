import { Router } from "express";
import {
    createPollController,
    deletePollController,
    getMyPollsController,
    getPollByIdController,
    getPublicPollController,
    publishPollController,
} from "./poll.controller.js";


const router = Router();

router.post("/",createPollController);
router.get("/my",getMyPollsController);
router.get("/public/:slug",getPublicPollController);
router.get("/:pollId",getPollByIdController);
router.delete("/:pollId",deletePollController);
router.patch("/:pollId/publish",publishPollController);

export default router;