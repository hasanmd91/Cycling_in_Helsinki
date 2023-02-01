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

app.use("/home", router);

// Connect to MongoDB using the connection URL specified in the .env file
const PORT = process.env.PORT || 3001;

mongoose

  .connect(
    "mongodb+srv://hasanmd91:Hasanedge6300ii@cluster1.nwbbjzu.mongodb.net/Helsinki_city_bike",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`server running on the port ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("strictQuery", false);

// Log a message when Mongoose is connected

mongoose.connection.on("open", () => {
  console.log("Mongoose connected.");
});
