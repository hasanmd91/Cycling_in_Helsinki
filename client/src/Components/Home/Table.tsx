import Paper from "@mui/material/Paper";
import { JourneyDetail } from "./Home";

interface props {
  journeyDetails: JourneyDetail[];
}

const Tablegrid: React.FC<props> = ({ journeyDetails }) => {
  return (
    <Paper>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Departure Station </th>
            <th scope="col">Departure Time</th>
            <th scope="col">Return Station </th>
            <th scope="col">Return Time</th>
            <th scope="col">Distance Covered</th>
            <th scope="col">Duration of Journey</th>
          </tr>
        </thead>
        <tbody>
          {journeyDetails.map((journey, index) => (
            <tr key={index}>
              <td>{journey.Departure_Station_Name}</td>
              <td>{journey.Departure_time}</td>
              <td>{journey.Return_Station_Name}</td>
              <td>{journey.Return_time}</td>
              <td>{`${(journey.Distance / 60).toFixed(2).toString()}min`}</td>
              <td>{`${(journey.Duration / 1000).toFixed(2).toString()}Km`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
};

export default Tablegrid;
