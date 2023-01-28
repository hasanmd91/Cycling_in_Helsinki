import mongoose from "mongoose";

export const journeySchema = mongoose.Schema({
  Departure_time: String,
  Return_time: String,
  Departure_Station_Id: Number,
  Departure_Station_Name: String,
  Return_Station_Id: Number,
  Return_Station_Name: String,
  Covered_Distance: Number,
  Duration: Number,
});

export const journey_details = mongoose.model("journey_details", journeySchema);
