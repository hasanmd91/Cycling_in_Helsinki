import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Stationlist from "./Components/StationList/Stationlist";
import Singlestation from "./Components/Singlestation/Singlestation";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/stations" element={<Stationlist />} />
          <Route path="/stations/:singlestation" element={<Singlestation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
