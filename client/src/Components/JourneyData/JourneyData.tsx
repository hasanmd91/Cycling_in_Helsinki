import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

interface JourneyDetail {
  Departure_time: String;
  Return_time: String;
  Departure_Station_Id: number;
  Departure_Station_Name: String;
  Return_Station_Id: number;
  Return_Station_Name: String;
  Distance: number;
  Duration: number;
}

const JourneyData: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [journeyDetails, setJourneyDetails] = useState<JourneyDetail[]>([]);
  const [pageNumber, setPageNumber] = useState<number[]>([1, 2, 3, 4, 5]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://helisinkicitybike.onrender.com/home/journey/?page=${currentPage}&perPage=${itemsPerPage}&search=${searchQuery}
        `
      );
      setJourneyDetails(data);
    };

    fetchData();
  }, [currentPage, itemsPerPage, searchQuery]);

  if (!journeyDetails.length) return <CircularProgress />;
  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Search
        </span>
        <input
          placeholder=" Enter Station Name"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Departure time</th>
            <th> Departure Station Name</th>
            <th> Return time</th>
            <th> Return Station Name</th>
            <th> Distance</th>
            <th> Duration</th>
          </tr>
        </thead>
        <tbody>
          {journeyDetails.map((item, index) => (
            <tr key={index}>
              <td>{item.Departure_time}</td>
              <td>{item.Departure_Station_Name}</td>
              <td>{item.Return_time}</td>
              <td>{item.Return_Station_Name}</td>
              <td>{(item.Distance / 1000).toFixed(2)}km</td>
              <td>{(item.Duration / 60).toFixed(2)}min </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {pageNumber.map((number) => (
          <button
            className="btn btn-outline-dark"
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="btn btn-outline-dark"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          ....
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <p style={{ fontSize: "10px", marginTop: "5px" }}>
        @Data source Helsinki City Bike, covers the period of May to July 2021.
      </p>
    </div>
  );
};

export default JourneyData;
