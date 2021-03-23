import "./areaSection.scss";
import gpsImg from "../../assets/ezor-gps.png";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchPageContent, fetchPageTitle } from "./../../utils/fetchData";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const AreaSection = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const pageCMSId = 42;

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }

    const fetchContent = async () => {
      setTitle(await fetchPageTitle(pageCMSId));
      setContent(await fetchPageContent(pageCMSId));
    };

    fetchContent();
  }, [controls, inView]);

  return (
    <section id="area-section">
      <div className="area-section-container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={container}
          className="area-section-content">
          <motion.h3 variants={item}>{title}</motion.h3>
          <motion.p variants={item} className="area-section-p">
            {content}
          </motion.p>
          <motion.div variants={item} className="area-section-gps-img">
            <a
              target="_blank"
              href="https://www.google.com/maps/search/%D7%A6%D7%95%D7%A7+%D7%90%D7%A8%D7%91%D7%9C%E2%80%AD/@32.8244708,35.499026,15z/data=!3m1!4b1">
              <img src={gpsImg} alt="gps location" />
            </a>
          </motion.div>
          <motion.div variants={item} className="area-section-content-btn-container">
            <motion.a
              href="#footer"
              variants={item}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              className="green-cta">
              לעוד פרטים על איזור
            </motion.a>
            <motion.a
              variants={item}
              href="https://www.parks.org.il/reserve-park/%D7%92%D7%9F-%D7%9C%D7%90%D7%95%D7%9E%D7%99-%D7%95%D7%A9%D7%9E%D7%95%D7%A8%D7%AA-%D7%98%D7%91%D7%A2-%D7%90%D7%A8%D7%91%D7%9C/"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              className="green-cta">
              לאתר הרישמי של הגן הלאומי
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaSection;
