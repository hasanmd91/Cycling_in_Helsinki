import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Stationlist from "./Components/StationList/Stationlist";
import Station from "./Components/Station/Station";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/stations" element={<Stationlist />} />
          <Route path="/stations/:station" element={<Station />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
