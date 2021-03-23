import { useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../app/store/globalReducer";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";

const container = {
  hidden: {
    x: "100vw",
    transition: {
      type: "tweet",
      duration: 0.8,
      staggerChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  show: {
    x: "0",
    transition: {
      type: "tweet",
      duration: 0.8,
      staggerChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -5 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleBurgerMenu());
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="burger-side-menu-container">
      <span className="close-btn close-btn-side-menu" onClick={() => dispatch(toggleBurgerMenu())}>
        X
      </span>
      <ul className="burger-menu-ul">
        <motion.a onClick={handleClick} className="burger-menu-logo" href="#hero-section" variants={item}>
          <Logo blue />
        </motion.a>
        <a href="#footer">
          <motion.li
            onClick={handleClick}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            className="green-cta contact-btn">
            צור קשר
          </motion.li>
        </a>
        <motion.li onClick={handleClick} variants={item} whileHover="hover">
          <a href="#area-section">על האיזור</a>
        </motion.li>
        <motion.li onClick={handleClick} variants={item} whileHover="hover">
          <a href="#exp-section">על החוויה</a>
        </motion.li>
        <motion.li onClick={handleClick} variants={item} whileHover="hover">
          <a href="#gallery-section">גלריה</a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default BurgerMenu;
