import { journey_details } from "../models/Schema.js";

export const getJourneyDetails = async (req, res) => {
  try {
    const JourneyDetails = await journey_details.find().limit(1);

    if (!JourneyDetails) {
      return res.status(404).json({ message: "Journey Details not found" });
    }
    res.status(200).json(JourneyDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving Journey Details" });
  }
};
