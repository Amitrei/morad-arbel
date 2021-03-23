import "./roomCard.scss";
import { useDispatch } from "react-redux";
import { toggleRoom } from "./../../app/store/globalReducer";
const RoomCard = ({ roomName, description, roomType }) => {
  const dispatch = useDispatch();
  return (
    <div className="room-card-container">
      <h4 className="room-card-type">{roomName}</h4>
      <p className="room-card-desc">{description}</p>
      <a className="green-cta room-card-cta" onClick={() => dispatch(toggleRoom())}>
        לעוד פרטים על היחידה
      </a>
    </div>
  );
};

export default RoomCard;
