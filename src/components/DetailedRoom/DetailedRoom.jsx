import "./detailedRoom.scss";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { toggleRoom, clearedRoomDetails } from "./../../app/store/globalReducer";
import { motion } from "framer-motion";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import spinner from "../../assets/spinner.gif";
import orderDetails from "../../assets/order-details.pdf";
const container = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: "0",
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 5, userSelect: "none", transition: { duration: 0.2 } },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } },
  exit: {
    opacity: 0,
    userSelect: "none",
    y: -5,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const DetailedRoom = () => {
  const dispatch = useDispatch();
  const roomDetails = useSelector((state) => state.roomDetails.room);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="detailed-room-container">
      <span
        className="close-btn"
        onClick={() => {
          dispatch(toggleRoom());
          dispatch(clearedRoomDetails());
        }}>
        X
      </span>
      {!roomDetails ? (
        <div className="spinner-container">
          <img src={spinner} />
        </div>
      ) : (
        <>
          <motion.h1 className="detailed-room-name">{roomDetails?.title}</motion.h1>
          <motion.p className="detailed-room-desc">{roomDetails?.content}</motion.p>
          <motion.h1 className="detailed-room-rules-title">תנאי שימוש</motion.h1>
          <motion.p className="detailed-room-rules">
            <a
              href={orderDetails}
              target="_blank"
              rel="noopener noreferrer"
              className="order-details-a">
              לחץ כאן בכדי לעיין בתנאים
            </a>
          </motion.p>
          <motion.h1 className="detailed-room-rules-title">הזמנה</motion.h1>
          <motion.a className="green-cta order-by-phone" href="tel:050-557-2003">
            להזמנה חייגו
          </motion.a>
          <motion.a
            target="_blank"
            href="https://wa.me/972505572003"
            className="green-cta order-by-whatsapp">
            <img src={whatsappIcon} alt="whatsapp" />

            <span>שלח הודעה</span>
          </motion.a>

          <motion.div className="detailed-room-gallery">
            {roomDetails?.images.length ? (
              <ImageGallery specificGallery={roomDetails?.images} />
            ) : (
              <div className="empty-gallery" />
            )}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default DetailedRoom;
