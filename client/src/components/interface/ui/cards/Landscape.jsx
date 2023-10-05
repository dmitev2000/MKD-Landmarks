import CardGallery from "./CardGallery";
import landscape1 from "../../../../assets/card-images/landscape1.jpg";
import landscape2 from "../../../../assets/card-images/landscape2.jpg";
import landscape3 from "../../../../assets/card-images/landscape3.jpg";
import NextButton from "../NextButton";

const Landscape = () => {
  return (
    <div className="card">
      <h3>Breathtaking natural landscapes</h3>
      <p>
        Macedonia, a land of astonishing natural beauty, is blessed with a
        diverse and breathtaking landscape that captivates the senses and leaves
        a lasting impression on all who venture here. From rugged mountains to
        serene lakes, Macedonia has remarkable natural wonders.
      </p>
      <CardGallery gallery={[landscape3, landscape2, landscape1]} />
      <NextButton element="architecture" />
    </div>
  );
};

export default Landscape;
