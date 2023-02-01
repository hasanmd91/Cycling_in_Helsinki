import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";

interface props {
  x: number;
  y: number;
  title: string;
}

const Map: React.FC<props> = ({ x, y, title }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcoxSMxAWa8QurUTzORx-9GQLqr84wqbg",
  });

  if (!isLoaded) return <CircularProgress />;
  return <LocationMap x={x} y={y} title={title} />;
};

const LocationMap: React.FC<props> = ({ x, y, title }) => {
  const center = useMemo(() => ({ lng: x, lat: y }), [x, y]);

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerStyle={{
        width: "100%",
        height: "400px",
        marginBottom: "10px",
      }}
    >
      <MarkerF position={center} title={title} />
    </GoogleMap>
  );
};

export default Map;
