import "./logo.scss";

const Logo = ({ blue }) => {
  return (
    <div className={blue ? "logo-container logo-blue" : "logo-container"}>
      <h1>Morad HaArbel</h1>
      <span>חוויות למרגלות הר הארבל</span>
    </div>
  );
};

export default Logo;
