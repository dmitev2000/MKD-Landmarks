import culture1 from "../../../../assets/card-images/culture1.jpg";
import culture2 from "../../../../assets/card-images/culture2.jpg";
import culture3 from "../../../../assets/card-images/culture3.jpg";
import CardGallery from "./CardGallery";

const Culture = () => {
  return (
    <div
      className="card"
      style={{ backgroundColor: "rgb(24, 26, 34)" }}
      id="culture"
    >
      <h3>Culture</h3>
      <p>
        The harmonious coexistence of diverse cultures is a testament to
        Macedonia's ability to embrace its multicultural identity. Visitors to
        this remarkable country have the privilege of experiencing this unique
        blend of traditions, creating an enriching and captivating cultural
        tapestry that sets Macedonia apart as a true melting pot of cultures in
        the heart of the Balkans.
      </p>
      <CardGallery gallery={[culture1, culture2, culture3]} />
    </div>
  );
};

export default Culture;
