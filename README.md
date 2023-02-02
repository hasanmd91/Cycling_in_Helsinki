# Helsinki city bike app (Dev Academy pre-assignment)

This application is a pre-assignment project for Solita dev Academy 2023. This application displays journey data provided by the Helsinki city bike. The data includes information about stations located in Helsinki and Espoo. This application code base is clean that anyone can understand and I tried to optimize the code as much as I could.

## Features

- Data was uploaded to the MongoDB database
- Data containing Empty fields, negative values, journeys less than 10m, and duration less than 10s are removed
- Journey details table shows departure and return stations, covered the distance in kilometers, and duration in minutes
- The station table shows the station list and some details
- Singel station views show the Station name address
- Total number of journeys starting from the station and also ending at the station

## Additional Features

- Paginated API and pagination table for showing journey details
- Searching query to the database for journey details
- Frontend searching for station list
- Pagination in the station list
- Single station location on the map
- Average distance of a journey starting from the station and ending at the station
- Backend deployed in the Cloud

## Tech Stack

#### Frontend

- React
- Typescript
- Material ui
- Bootstrap
- And design

#### Backend

- Node
- Express
- JavaScript

#### Database

- MongoDb Atlas

## Demo

- [Live Link](https://woltassignment.netlify.app/)
- [Backend](https://helisinkicitybike.onrender.com/home/journey)

## Author

- @Hasan
- [@Github](https://github.com/hasanmd91?tab=repositories)
- [@Linkedin](https://www.linkedin.com/in/hasanmd91/?originalSubdomain=fi)

## Data

##### Journey details

- https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv
- https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv
- https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv

##### Helsinki Region Transport’s (HSL) city bicycle stations:

- https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv

##### License and information:

- https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902

@The data is owned by City Bike Finland.

## Installation

- This is a monorepo GitHub repository containing multiple folder names server and client.
- Clone or Download it to your local machine
- cd server npm install & npm start
- cd client npm install & npm start

## FAQ

- Because of 512MB cluster space I could only upload two datasets about the journey details to the database
