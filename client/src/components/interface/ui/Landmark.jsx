import PropTypes from "prop-types";

const Landmark = ({ name, location, image }) => {
  return (
    <div className="landmark" style={{ backgroundImage: `url(${image})` }}>
      <div className="mask">
        <h5>{name}</h5>
        <p>{location}</p>
      </div>
    </div>
  );
};

Landmark.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Landmark;
