import { useState, useRef } from "react";
import useClickOutSideEffect from "../../../CommonHooks/useClickOutSideEffect";

const Notification = (props) => {
  const { icon, name, number, content } = props;
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const HandlerOnclickOutSide = (isOut) => {
    if (isOut) {
      setIsOpen(false);
    }
  };

  useClickOutSideEffect(wrapperRef, HandlerOnclickOutSide, true);

  const HandlerOnclick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={isOpen ? "open" : ""} ref={wrapperRef}>
      <a
        href="#"
        className="dropdown-toggle notification-icon"
        data-toggle="dropdown"
        aria-expanded={isOpen}
        onClick={HandlerOnclick}
      >
        <i className={icon}></i>
        <span className="badge">{number}</span>
      </a>

      <div className="dropdown-menu notification-menu large">
        <div className="notification-title">
          <span className="pull-right label label-default">{number}</span>
          {name}
        </div>

        <div className="content">{content}</div>
      </div>
    </li>
  );
};

export default Notification;
