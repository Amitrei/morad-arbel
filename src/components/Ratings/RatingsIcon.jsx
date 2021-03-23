import "./ratingsIcon.scss";
import { motion } from "framer-motion";
const RatingsIcon = ({ rating, url, website }) => {
  return (
    <a href={`http://www.${url}`} target="_blank">
      <motion.div
        whileHover={{
          scale: 1.3,
          transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeOut",
          },
        }}
        whileTap={{ scale: 0.9 }}
        className="rating-icon-container">
        <div className="ratings-box-container">
          <span className="rating-score">{rating}</span>
        </div>
        <span className="rating-website">{website}</span>
      </motion.div>
    </a>
  );
};

export default RatingsIcon;
