import React from "react";
import TopRatedLocations from "../interface/ui/TopRatedLocations";
import SuggestedLocations from "../interface/ui/SuggestedLocations";

const Discover = () => {
  return (
    <div className="page">
      <TopRatedLocations />
      <SuggestedLocations />
    </div>
  );
};

export default Discover;
