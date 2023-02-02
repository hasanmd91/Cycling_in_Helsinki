import { journey_details, station_details } from "../models/Schema.js";
import async from "async";

// This function retrieves all journey details from the journey_details collection and returns them in a JSON format

// .skip((page - 1) * perPage)
//.limit(perPage);
//.limit(perPage);
export const getJourneyDetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1);
    const perPage = parseInt(req.query.perPage || 10);
    const search = req.query.search || "";

    let JourneyDetails = await journey_details.find({
      Departure_Station_Name: { $regex: search, $options: "i" },
    });

    if (!JourneyDetails.length) {
      JourneyDetails = await journey_details.find();
    }

    const totalpages = Math.ceil(
      (await journey_details.countDocuments()) / perPage
    );

    res.status(200).json({ JourneyDetails, totalpages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving Journey Details" });
  }
};

// This function retrieves all station details from the station_details collection and returns them in a JSON format

export const getStationListDetails = async (req, res) => {
  try {
    const stationListDetails = await station_details.find();
    if (!station_details) {
      return res.status(404).json({ message: "station lists not found" });
    }
    res.status(200).json(stationListDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Error retriving station list" });
  }
};

// This function retrieves all details of a specific station from the journey_details and station_details collections

export const getStationDetails = async (req, res) => {
  const { station } = req.params;

  console.log(station);

  // Use async.parallel to run multiple database queries at the same time

  async.parallel(
    {
      departureJourneys: (callback) =>
        journey_details
          .countDocuments({ Departure_Station_Name: station })
          .exec(callback),
      returnJourneys: (callback) =>
        journey_details
          .countDocuments({ Return_Station_Name: station })
          .exec(callback),
      stationListDetails: (callback) =>
        station_details.find({ Nimi: station }).exec(callback),

      averageDepartureDistance: (callback) =>
        journey_details
          .aggregate([
            {
              $match: {
                $or: [{ Departure_Station_Name: station }],
              },
            },
            {
              $group: {
                _id: null,
                averageDepartureDistance: { $avg: "$Distance" },
              },
            },
          ])
          .exec(callback),

      averageReturnDistance: (callback) =>
        journey_details
          .aggregate([
            {
              $match: {
                $or: [{ Return_Station_Name: station }],
              },
            },
            {
              $group: {
                _id: null,
                averageReturnDistance: { $avg: "$Distance" },
              },
            },
          ])
          .exec(callback),
    },
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      // simplifiedResult  retunrs simplified version of results easily map them

      const simplifiedResult = {
        stationListDetails: results.stationListDetails[0],
        departureJourneys: results.departureJourneys,
        returnJourneys: results.returnJourneys,
        averageDepartureDistance: results.averageDepartureDistance[0]
          ? results.averageDepartureDistance[0].averageDepartureDistance
          : 0,
        averageReturnDistance: results.averageReturnDistance[0]
          ? results.averageReturnDistance[0].averageReturnDistance
          : 0,
      };

      return res.json(simplifiedResult);
    }
  );
};
