import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface journeyDetail {
  Departure_time: String;
  Return_time: String;
  Departure_Station_Id: Number;
  Departure_Station_Name: String;
  Return_Station_Id: Number;
  Return_Station_Name: String;
  Covered_Distance: Number;
  Duration: Number;
}

interface props {
  journeyDetails: journeyDetail[];
}

const Tablegrid: React.FC<props> = ({ journeyDetails }) => {
  journeyDetails.map((journey) => console.log(journey));

  return <div></div>;
};

// <TableContainer
//   component={Paper}
//   sx={{ maxWidth: "1400px", justifyConten: "center", color: "red" }}
// >
//   <Table sx={{ minWidth: 650 }} aria-label="simple table">
//     <TableHead>
//       <TableRow>
//         <TableCell align="right">Departure station </TableCell>
//         <TableCell align="right">Return station </TableCell>
//         <TableCell align="right">Covered distance (Km)</TableCell>
//         <TableCell align="right">Duration (min.)</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {journeyDetails.map((journey) => (
//         <TableRow
//           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//         >
//           <TableCell component="th" scope="row"></TableCell>
//           <TableCell align="right">
//             {journey.Departure_Station_Name}
//           </TableCell>
//           <TableCell align="right">{journey.Return_Station_Name}</TableCell>
//           <TableCell align="right"></TableCell>
//           <TableCell align="right"></TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>
//   );
// };

export default Tablegrid;
