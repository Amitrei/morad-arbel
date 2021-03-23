import "./navBar.scss";
import Logo from "./../Logo/Logo";
import { motion } from "framer-motion";
import BurgerMenuIcon from "../BurgerMenu/BurgerMenuIcon";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <BurgerMenuIcon />

      <ul className="navbar-menu-list">
        <a href="#footer">
          <motion.li
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            className="green-cta contact-btn">
            צור קשר
          </motion.li>
        </a>
        <li>
          <a href="#area-section">על האיזור</a>
        </li>
        {/* 
        <li className="logo-li">
          <Logo />
        </li> */}

        <li className="logo-trasparent2">
          <a href="#hero-section">
            <Logo />
          </a>
        </li>

        <li>
          <a href="#exp-section">על החוויה</a>
        </li>
        <li>
          <a href="#exp-section">גלריה</a>
        </li>
      </ul>

      <div className="navbar-logo-tablet">
        <Logo />
      </div>
    </div>
  );
};

export default NavBar;
