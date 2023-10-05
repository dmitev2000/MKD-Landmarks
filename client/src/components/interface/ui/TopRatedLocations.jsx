import React from "react";
import bayOfBones from "../../../assets/bay-of-bones-ohrid.jpg";
import kaleFortress from "../../../assets/kale-fortress-skopje.jpg";
import Landmark from "./Landmark";
import "./UI.css";

const TopRatedLocations = () => {
  const landmarks = [
    { id: 1, name: "Bay of bones", location: "Ohrid", image: bayOfBones },
    { id: 2, name: "Kale fortress", location: "Skopje", image: kaleFortress },
  ];

  return (
    <>
      <h3>Top Rated Locations</h3>
      <div className="landmark-list">
        {landmarks.map((l) => {
          return (
            <Landmark
              key={l.id}
              location={l.location}
              name={l.name}
              image={l.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default TopRatedLocations;
