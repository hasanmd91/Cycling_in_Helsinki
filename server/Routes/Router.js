import express from "express";
import { getJourneyDetails, getStationDetails } from "./../Controller/index.js";

const router = express.Router();

router.get("/", getJourneyDetails);
router.get("/stations", getStationDetails);

export default router;
