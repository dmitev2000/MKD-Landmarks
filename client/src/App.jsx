import TourPackage from "./components/pages/TourPackage";
import Discover from "./components/pages/Discover";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/tour-package" element={<TourPackage />} />
    </Routes>
  );
}

export default App;
