import { Box, CircularProgress } from "@mui/material";
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

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [journeyDetails, setJourneyDetails] = useState<JourneyDetail[]>([]);
  const [pageNumber, setPageNumber] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/?page=${currentPage}&perPage=${itemsPerPage}`
      );

      setJourneyDetails(data);
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  if (!journeyDetails.length) return <CircularProgress />;
  return (
    <div className="container mt-5">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Departure Station Id</th>
            <th> Departure Station Name</th>
            <th> Departure time</th>
            <th> Distance</th>
            <th> Duration</th>
            <th> Return Station Id</th>
            <th> Return Station Name</th>
            <th> Return time</th>
          </tr>
        </thead>
        <tbody>
          {journeyDetails.map((item, index) => (
            <tr key={index}>
              <td>{item.Departure_Station_Id}</td>
              <td>{item.Departure_Station_Name}</td>
              <td>{item.Departure_time}</td>
              <td>{item.Distance}</td>
              <td>{item.Duration}</td>
              <td>{item.Return_Station_Id}</td>
              <td>{item.Return_Station_Name}</td>
              <td>{item.Return_time}</td>
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

export default Home;
