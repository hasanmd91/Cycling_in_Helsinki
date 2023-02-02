import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { getStationDetails } from "../../Api/index";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

// Define the interface for the station data
export interface Stations {
  Fid: number;
  Id: number;
  Nimi: String;
  Osoite: String;
  Adress: String;
  kaupunki: String;
  Kapasiteet: number;
  x: number;
  y: number;
}

interface props {}

// The Stationlist component,  displays a list of station data
const Stationlist: React.FC<props> = () => {
  const [stationList, setStationList] = useState<Stations[]>([]);
  const [search, setSearch] = useState<string>("");

  //Use effect hook & Async function to fetch the station details from the API

  useEffect(() => {
    const getStationList = async () => {
      try {
        const { data } = await getStationDetails();
        setStationList(data);
      } catch (error) {
        alert(error);
      }
    };
    getStationList();
  }, []);

  const columns: ColumnsType<Stations> = [
    {
      title: "Station Name",
      dataIndex: "Nimi",
      width: 100,
      fixed: "left",
      render: (Nimi: string) => (
        <Link
          to={`/stations/${Nimi}`}
          style={{ textDecoration: "none", color: "Highlight" }}
        >
          {Nimi}{" "}
        </Link>
      ),
    },

    {
      title: "Adress",
      dataIndex: "Osoite",
      width: 100,
      fixed: "left",
    },
    {
      title: "City",
      dataIndex: "Kaupunki",
      width: 100,
      fixed: "left",
    },
    {
      title: "Bike capacity",
      dataIndex: "Kapasiteet",
      width: 100,
      fixed: "left",
    },
  ];

  // Function to filter the station list based on the search input value

  const filterdata = stationList.filter((station) =>
    station.Nimi.toLowerCase().includes(search.toLowerCase())
  );
  // If there is no data yet, show a loading spinner
  if (!stationList.length) {
    return <CircularProgress />;
  }
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value as string)
          }
        />
      </div>

      {/* Table to display the station list */}
      <Table
        columns={columns}
        dataSource={filterdata}
        pagination={{ pageSize: 30 }}
      />

      <p style={{ fontSize: "10px", margin: "5px" }}>
        @Data source Helsinki City Bike, covers the period of May to July 2021.
      </p>
    </div>
  );
};

export default Stationlist;
