import "./burgerMenu.scss";
import { useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../app/store/globalReducer";
const BurgerMenuIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="burger-menu-container" onClick={() => dispatch(toggleBurgerMenu())}>
      <div className="burger-menu-icon-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BurgerMenuIcon;
