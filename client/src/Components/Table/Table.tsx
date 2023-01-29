import Paper from "@mui/material/Paper";

interface journeyDetail {
  Departure_time: String;
  Return_time: String;
  Departure_Station_Id: number;
  Departure_Station_Name: String;
  Return_Station_Id: number;
  Return_Station_Name: String;
  Distance: number;
  Duration: number;
}

interface props {
  journeyDetails: journeyDetail[];
  loading: boolean;
}

const Tablegrid: React.FC<props> = ({ journeyDetails, loading }) => {
  if (loading) {
    return <h1> Data is Loading....</h1>;
  }

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
          {journeyDetails.map((journey) => (
            <tr>
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
