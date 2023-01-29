import mongoose from "mongoose";

// journey details schema

const journeySchema = mongoose.Schema({
  Departure_time: { type: String, trim: true },
  Return_time: { type: String, trim: true },
  Departure_Station_Id: { type: Number, trim: true },
  Departure_Station_Name: { type: String, trim: true },
  Return_Station_Id: { type: Number, trim: true },
  Return_Station_Name: { type: String, trim: true },
  Covered_Distance: { type: Number, trim: true },
  Duration_of_journey: { type: Number, trim: true },
});

export const journey_details = mongoose.model("journey_details", journeySchema);

// station schema

const stationListSchema = mongoose.Schema({
  Fid: { type: Number, trim: true },
  Id: { type: Number, trim: true },
  Nimi: { type: String, trim: true },
  Osoite: { type: String, trim: true },
  Adress: { type: String, trim: true },
  kaupunki: { type: String, trim: true },
  Kapasiteet: { type: Number, trim: true },
  x: { type: Number, trim: true },
  y: { type: Number, trim: true },
});

export const station_details = mongoose.model(
  "station_details",
  stationListSchema
);
