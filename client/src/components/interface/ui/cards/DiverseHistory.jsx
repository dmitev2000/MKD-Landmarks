import history1 from "../../../../assets/card-images/history1.jpg";
import history2 from "../../../../assets/card-images/history2.jpg";
import history3 from "../../../../assets/card-images/history3.jpg";
import NextButton from "../NextButton";
import CardGallery from "./CardGallery";

const DiverseHistory = () => {
  return (
    <div className="card" id="history">
      <h3>History</h3>
      <p>
        Macedonia is a treasure trove of historical and archaeological wonders,
        where millennia of human civilization have left their indelible marks on
        the landscape. From ancient cities to well-preserved monuments,
        Macedonia has rich historical and archaeological heritage.
      </p>
      <CardGallery gallery={[history1, history2, history3]} />
      <NextButton element="culture" />
    </div>
  );
};

export default DiverseHistory;
