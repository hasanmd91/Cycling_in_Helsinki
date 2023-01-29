import express from "express";
import {
  getJourneyDetails,
  getStationListDetails,
  getStationDetails,
} from "./../Controller/index.js";

const router = express.Router();

router.get("/", getJourneyDetails);
router.get("/stations", getStationListDetails);
router.get("/stations/:station", getStationDetails);

export default router;
