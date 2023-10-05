import React from "react";
import Landscape from "./cards/Landscape";
import Culture from "./cards/Culture";
import Architecture from "./cards/Architecture";
import DiverseHistory from "./cards/DiverseHistory";

const AboutComponent = () => {
  return (
    <div id="about">
      {/* <h1>Macedonia's diversity</h1>
      <p>
        Macedonia is a land of diverse experiences, from historical and cultural
        gems to breathtaking natural wonders. No matter where you choose to
        explore, you'll be captivated by the rich tapestry of this Balkan
        nation.
      </p> */}
      <Landscape />
      <Architecture />
      <DiverseHistory />
      <Culture />
    </div>
  );
};

export default AboutComponent;
