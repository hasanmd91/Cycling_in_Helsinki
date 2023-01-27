import express from "express";
import { getJourneyDetails } from "./../Controller/index.js";

const router = express.Router();

router.get("/home", getJourneyDetails);

export default router;
