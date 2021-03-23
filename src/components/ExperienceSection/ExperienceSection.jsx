import "./expSection.scss";
import RoomCard from "./../RoomCard/RoomCard";
import ImageGallery from "../ImageGallery/ImageGallery";
import DetailedRoom from "../DetailedRoom/DetailedRoom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { loadedRoomDetails } from "../../app/store/globalReducer";
import { fetchPageContent, fetchPageTitle, fetchImgs } from "./../../utils/fetchData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "tweet",
      ease: "easeIn",
      duration: 0.8,
      staggerChildren: 0.2,
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

const ExperienceSection = () => {
  const dispatch = useDispatch();
  const isRoomClicked = useSelector((state) => state.roomDetails.show);
  const isBlackOverlay = useSelector((state) => state.blackOverlay);
  const controls = useAnimation();
  const pageCMSId = 8;
  const [ref, inView] = useInView();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const shakedId = 61;
  const orenId = 55;
  const princeId = 63;
  const kingId = 65;

  const fetchRoomDetails = async (pageId) => {
    let roomDetails = {};
    roomDetails.content = await fetchPageContent(pageId);
    roomDetails.title = await fetchPageTitle(pageId);
    roomDetails.images = await fetchImgs(pageId);
    return dispatch(loadedRoomDetails(roomDetails));
  };

  useEffect(() => {
    const fetchTitleContent = async () => {
      setTitle(await fetchPageTitle(pageCMSId));
      setContent(await fetchPageContent(pageCMSId));
    };

    fetchTitleContent();
    const body = document.querySelector("body");
    isBlackOverlay ? body.classList.add("no-scroll") : body.classList.remove("no-scroll");

    if (inView) {
      controls.start("show");
    }
  }, [isBlackOverlay, controls, inView]);

  return (
    <section id="exp-section">
      <motion.div
        ref={ref}
        animate={controls}
        variants={container}
        initial="hidden"
        className="exp-section-container">
        <AnimatePresence>{isRoomClicked && <DetailedRoom />}</AnimatePresence>
        <motion.div id="gallery-section" variants={item} className="exp-section-right">
          <h3>גלריה</h3>
          <ImageGallery large />
        </motion.div>
        <div className="exp-section-content-left">
          <div className="exp-title-p-wrapper">
            <motion.h3 variants={item}>{title}</motion.h3>
            <motion.p variants={item} className="exp-content-p">
              {content}
            </motion.p>
            <motion.a href="#footer" variants={item} className="green-cta exp-content-cta">
              ליצירת קשר
            </motion.a>
          </div>
          <div className="room-types-container">
            <motion.div
              variants={item}
              className="room-card-flex-wrapper"
              onClick={() => {
                fetchRoomDetails(shakedId);
              }}>
              <RoomCard
                roomName="בקתות שקד"
                description="בקתות עץ בסגנון אירוח כפרי, ג'קוזי המשקיף על הנוף הגלילי"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="room-card-flex-wrapper"
              onClick={() => {
                fetchRoomDetails(orenId);
              }}>
              <RoomCard
                roomName="סוויטת אורן"
                description="סוויטה מפנקת בשילוב עץ עם ג'קוזי גדול ומרפסת גדולה"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="room-card-flex-wrapper"
              onClick={() => {
                fetchRoomDetails(princeId);
              }}>
              <RoomCard
                roomName="סוויטת פרינס"
                description=" סוויטת ליל הכלולות סוויטה זוגית ורומנטית"
              />
            </motion.div>

            <motion.div
              variants={item}
              className="room-card-flex-wrapper"
              onClick={() => {
                fetchRoomDetails(kingId);
              }}>
              <RoomCard
                roomName="סוויטת קינג"
                description="יחידה משפחתית המתאימה גם לשתי זוגות בעלת שתי חדרי שינה סלון וגקוזי ענקי מפואר"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
