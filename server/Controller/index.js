import { journey_details, station_details } from "../models/Schema.js";

export const getJourneyDetails = async (req, res) => {
  try {
    const JourneyDetails = await journey_details.find({}).limit(1000);

    if (!JourneyDetails) {
      return res.status(404).json({ message: "Journey Details not found" });
    }
    res.status(200).json(JourneyDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving Journey Details" });
  }
};

export const getStationDetails = async (req, res) => {
  try {
    const stationListDetails = await station_details.find({});
    if (!station_details) {
      return res.status(404).json({ message: "station lists not found" });
    }
    res.status(200).json(stationListDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Error retriving station list" });
  }
};
