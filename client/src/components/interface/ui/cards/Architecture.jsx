import architecture1 from "../../../../assets/card-images/architecture1.jpg";
import architecture2 from "../../../../assets/card-images/architecture2.jpg";
import architecture3 from "../../../../assets/card-images/architecture3.jpg";
import NextButton from "../NextButton";
import CardGallery from "./CardGallery";

const Architecture = () => {
  return (
    <div
      className="card"
      id="architecture"
      style={{ backgroundColor: "rgb(24, 26, 34)" }}
    >
      <h3>Architecture</h3>
      <p>
        Macedonia's modern cities seamlessly blend the country's rich historical
        heritage with contemporary architectural marvels, creating a unique and
        visually captivating urban landscape.
      </p>
      <CardGallery gallery={[architecture1, architecture2, architecture3]} />
      <NextButton element="history" />
    </div>
  );
};

export default Architecture;
