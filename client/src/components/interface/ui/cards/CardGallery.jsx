import PropTypes from "prop-types";

const CardGallery = ({ gallery }) => {
  return (
    <div className="card-gallery">
      {gallery.map((img, ind) => {
        var left, top;
        if (ind === 0) {
          left = 100;
          top = 0;
        } else if (ind === 1) {
          left = 200;
          top = 25;
        } else {
          left = 300;
          top = 50;
        }
        return (
          <img
            style={{ left: `calc(50% - ${left}px)`, top: `${top}px` }}
            src={img}
            alt=""
            key={ind}
          />
        );
      })}
    </div>
  );
};

CardGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default CardGallery;
