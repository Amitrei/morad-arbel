import Quotes from "../Quotes/Quotes";
import Ratings from "../Ratings/Ratings";
import { motion } from "framer-motion";
import "./hero.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: "0",
      staggerChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } },
};

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="hero-container">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-content">
          <motion.p variants={item} className="hero-main-p">
            <span className="hero-span-bold">מורד הארבל</span> מציעים לכם חוויה כפרית למרגלות הר
            ארבל עם מתחם גדול הכולל בריכה עונתית, אמבט עיסוי , שירותי ספא , ארוחות בוקר מפנקות ועוד.
          </motion.p>
          <motion.a
            href="#footer"
            variants={item}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            className="green-cta order-btn">
            להזמנת מקום צרו קשר
          </motion.a>
          <motion.div variants={item}>
            <Ratings />
          </motion.div>
          <motion.div variants={item} className="qoutes-motion-container">
            <Quotes />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
