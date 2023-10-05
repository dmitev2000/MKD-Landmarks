import IntroFooterElement from "./IntroFooterElement";
import "./UI.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-title">
        WORLD OF PARADISE, <span>MACEDONIA</span>
      </div>
      <div className="intro-text">
        Join us on a journey to explore the pristine lakes, verdant forests, and
        charming locations that make Macedonia a true paradise for those seeking
        an authentic and awe-inspiring outdoor experience.
      </div>
      <div className="intro-footer">
        <IntroFooterElement caption="Capital" text="Skopje" />
        <IntroFooterElement caption="Population" text="2.065 million" />
        <IntroFooterElement caption="Language" text="Macedonian" />
      </div>
    </div>
  );
};

export default Intro;
