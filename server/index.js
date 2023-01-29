import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./Routes/Router.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Use router for handling requests

app.use("/", router);

// Connect to MongoDB using the connection URL specified in the .env file

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(3001, () => console.log(`server running on the port ${3001}`))
  )
  .catch((error) => console.log(error));

mongoose.set("strictQuery", false);

// Log a message when Mongoose is connected

mongoose.connection.on("open", () => {
  console.log("Mongoose connected.");
});
