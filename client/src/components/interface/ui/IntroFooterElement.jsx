import PropTypes from "prop-types";

const IntroFooterElement = ({ caption, text }) => {
  return (
    <div>
      <span className="intro-footer-caption">{caption}</span>
      <span className="intro-footer-text">{text}</span>
    </div>
  );
};

IntroFooterElement.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IntroFooterElement;
