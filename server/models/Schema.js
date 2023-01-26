import mongoose from "mongoose";

export const journeySchema = mongoose.Schema({
  Departure: String,
  Return: String,
  DepartureStationId: Number,
  DepartureStationName: String,
  ReturnStationId: Number,
  ReturnStationName: String,
  CoveredDistance: Number,
  Duration: Number,
});

const journeyDetails = mongoose.model("journeyDetails", journeySchema);
