import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getJourneyDetails } from "../../Api";

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

interface props {}

interface JourneyDetailsResponse {
  data: JourneyDetail[];
}

const Home: React.FC<props> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [journeyDetails, setJourneyDetails] = useState<JourneyDetail[]>([]);
  const [pageNumber, setPageNumber] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3001/?page=${currentPage}&perPage=${itemsPerPage}`
      );
      const data = await res.json();
      setJourneyDetails(data);
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      {!journeyDetails.length ? (
        <CircularProgress />
      ) : (
        <div>
          {" "}
          <table className="table">
            <thead>
              <tr>
                <th> Departure_Station_Id</th>
                <th> Departure_Station_Name</th>
                <th> Departure_time</th>
                <th> Distance</th>
                <th> Duration</th>
                <th> Return_Station_Id</th>
                <th> Return_Station_Name</th>
                <th> Return_time</th>
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
              <button key={number} onClick={() => setCurrentPage(number)}>
                {number}
              </button>
            ))}

            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Home;
