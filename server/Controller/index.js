import { journey_detail } from "../models/Schema.js";

export const getJourneyDetails = async (req, res) => {
  try {
    const JourneyDetails = await journey_detail.find().limit(10);

    if (!JourneyDetails) {
      return res.status(404).json({ message: "Journey Details not found" });
    }
    res.status(200).json(JourneyDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving Journey Details" });
  }
};
