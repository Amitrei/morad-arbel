import React, { useEffect } from "react";
import "./app.scss";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import AreaSection from "./components/AreaSection/AreaSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { AnimatePresence } from "framer-motion";
function App() {
  const blackOverlay = useSelector((state) => state.blackOverlay);
  const burgerMenu = useSelector((state) => state.burgerMenu);

  useEffect(() => {
    document.title = "Morad Arbel";
  }, []);

  return (
    <div className="app">
      <AnimatePresence>{burgerMenu && <BurgerMenu />}</AnimatePresence>
      <div className={blackOverlay ? "black-overlay black-overlay-on" : "black-overlay"} />
      <NavBar />
      <Hero />
      <AreaSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
