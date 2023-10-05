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
        <div>
          <span className="intro-footer-caption">Capital</span>
          <span className="intro-footer-text">Skopje</span>
        </div>
        <div>
          <span className="intro-footer-caption">Population</span>
          <span className="intro-footer-text">2.065 million</span>
        </div>
        <div>
          <span className="intro-footer-caption">Language</span>
          <span className="intro-footer-text">Macedonian</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
