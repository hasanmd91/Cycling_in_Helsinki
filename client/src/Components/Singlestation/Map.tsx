import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";

interface props {
  x: number;
  y: number;
}

const Map: React.FC<props> = ({ x, y }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcoxSMxAWa8QurUTzORx-9GQLqr84wqbg",
  });

  if (!isLoaded) return <CircularProgress />;
  return <LocationMap x={x} y={y} />;
};

const LocationMap: React.FC<props> = ({ x, y }) => {
  const center = useMemo(() => ({ lng: x, lat: y }), []);

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
