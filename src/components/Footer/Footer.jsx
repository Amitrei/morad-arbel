import "./footer.scss";
import whatsappIcon from "../../assets/whatsapp-footer.svg";
import phoneIcon from "../../assets/phone-footer.svg";
import facebookIcon from "../../assets/facebook-footer.svg";
import wazeIcon from "../../assets/waze-icon.svg";
import mapsIcon from "../../assets/maps-icon.svg";
import { motion } from "framer-motion";
const variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-contact-section">
          <h1>צור קשר</h1>
          <h4>טלפון: 050-557-2003</h4>
          <div className="footer-contact-btns-container">
            <div className="footer-by-whatsapp">
              <a href="https://wa.me/972505572003">
                <motion.img
                  variants={variants}
                  whileHover="hover"
                  whileTap="tap"
                  src={whatsappIcon}
                  alt="whatsapp"
                />
              </a>
            </div>
            <div className="footer-by-phone">
              <a href="tel:050-557-2003">
                <motion.img
                  variants={variants}
                  whileHover="hover"
                  whileTap="tap"
                  src={phoneIcon}
                  alt="phone"
                />
              </a>
            </div>
            <div className="footer-by-facebook">
              <a href="https://www.facebook.com/bmoradarbel">
                <motion.img
                  variants={variants}
                  whileHover="hover"
                  whileTap="tap"
                  src={facebookIcon}
                  alt="facebook"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-location-section">
          <h1>מיקום</h1>
          <h4>כתובת: מורד הצבר, ארבל</h4>
          <div className="footer-contact-btns-container">
            <div className="footer-by-waze">
              <a href="https://waze.com/ul?q=%D7%9E%D7%95%D7%A8%D7%93+%D7%94%D7%90%D7%A8%D7%91%D7%9C">
                <motion.img
                  variants={variants}
                  whileHover="hover"
                  whileTap="tap"
                  src={wazeIcon}
                  alt="waze"
                />
              </a>
            </div>
            <div className="footer-by-maps">
              <a href="https://goo.gl/maps/3oNS1NCzyyvJiyGs8">
                <motion.img
                  variants={variants}
                  whileHover="hover"
                  whileTap="tap"
                  src={mapsIcon}
                  alt="google Maps"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
