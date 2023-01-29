import mongoose from "mongoose";

// journey details schema

const journeySchema = mongoose.Schema({
  Departure_time: String,
  Return_time: String,
  Departure_Station_Id: Number,
  Departure_Station_Name: String,
  Return_Station_Id: Number,
  Return_Station_Name: String,
  Covered_Distance: Number,
  Duration_of_journey: Number,
});

export const journey_details = mongoose.model("journey_details", journeySchema);

// station schema

const stationListSchema = mongoose.Schema({
  Fid: Number,
  Id: Number,
  Nimi: String,
  Osoite: String,
  Adress: String,
  kaupunki: String,
  Kapasiteet: Number,
  x: Number,
  y: Number,
});

export const station_details = mongoose.model(
  "station_details",
  stationListSchema
);
