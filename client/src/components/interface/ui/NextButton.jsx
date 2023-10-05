import "./UI.css";

const NextButton = ({ element }) => {
  return <a className="next-btn" href={`#${element}`}>NEXT</a>;
};

export default NextButton;
