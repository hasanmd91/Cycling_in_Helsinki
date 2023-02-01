import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";

interface props {
  x: number;
  y: number;
  title: string;
}

// google map component

const Map: React.FC<props> = ({ x, y, title }) => {
  // useLoadScript is a hook to load the Google Maps JavaScript API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcoxSMxAWa8QurUTzORx-9GQLqr84wqbg",
  });

  if (!isLoaded) return <CircularProgress />;
  return <LocationMap x={x} y={y} title={title} />;
};

const LocationMap: React.FC<props> = ({ x, y, title }) => {
  // useMemo is a hook that memoizes values, so they are not recreated if not needed
  // In this case, we are only creating the center object once, with the given x and y values

  const center = useMemo(() => ({ lng: x, lat: y }), [x, y]);
  // Render a GoogleMap with a Marker in the given center position and title

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
