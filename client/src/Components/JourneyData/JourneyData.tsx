import React from "react";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import axios from "axios";

// Define the shape of JourneyDetail object with its properties
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
  const [journeyDetails, setJourneyDetails] = useState<JourneyDetail[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // data fetch function
  const fetchData = async (page: number) => {
    try {
      const { data } = await axios.get(
        `https://helisinkicitybike.onrender.com/home/journey/?page=${page}&perPage=20&search=${searchQuery}`
      );

      setJourneyDetails(data.JourneyDetails);
      setTotalPages(data.totalpages);
    } catch (error) {
      alert(error);
    }
  };

  // useffect hood invoke fetch function

  useEffect(() => {
    fetchData(1);
  }, [searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page);
  };

  // table colums declaration
  const columns: ColumnsType<JourneyDetail> = [
    {
      title: "Departure time",
      dataIndex: "Departure_time",
      width: 100,
      fixed: "left",
    },

    {
      title: "Departure Station Name",
      dataIndex: "Departure_Station_Name",
      width: 100,
      fixed: "left",
    },
    {
      title: "Return time",
      dataIndex: "Return_time",
      width: 100,
      fixed: "left",
    },
    {
      title: "Return Station Name ",
      dataIndex: "Return_Station_Name",
      width: 100,
      fixed: "left",
    },
    {
      title: " Distance ",
      dataIndex: "Distance",
      width: 100,
      fixed: "left",
      render: (distance: number) => `${(distance / 1000).toFixed(2)} km`,
    },
    {
      title: "Duration ",
      dataIndex: "Duration",
      width: 100,
      fixed: "left",
      render: (duration: number) => `${(duration / 60).toFixed(2)} min`,
    },
  ];

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
      <Table
        columns={columns}
        dataSource={journeyDetails}
        pagination={{
          current: currentPage,
          onChange: handlePageChange,
          total: totalPages,
          pageSize: 20,
        }}
      />

      <p style={{ fontSize: "10px", marginTop: "5px" }}>
        @Data source Helsinki City Bike, covers the period of May to July 2021.
      </p>
    </div>
  );
};

export default JourneyData;
