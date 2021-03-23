import RatingsIcon from "./RatingsIcon";
import "./ratings.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const item = {
  hidden: { opacity: 1, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Ratings = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="ratings-container">
      <motion.div variants={item}>
        <RatingsIcon
          rating={9.5}
          url="booking.com/hotel/il/bemorad-ha-39-arbel.he.html"
          website="Booking.com"
        />
      </motion.div>
      <motion.div variants={item}>
        <RatingsIcon rating={9.4} url="he.hotels.com/ho1702258688/" website="Hotels.com" />
      </motion.div>
      <motion.div variants={item}>
        <RatingsIcon
          rating="4.7/5"
          url="expedia.com/Galil-Tachton-Hotels-Morad-HaHarbel.h53164334.Hotel-Information"
          website="Expedia.com"
        />
      </motion.div>
    </motion.div>
  );
};

export default Ratings;
