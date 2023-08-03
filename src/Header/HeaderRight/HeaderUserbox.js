import LoggedUser from "./logged-user.jpg";
import { useState, useRef } from "react";
import useClickOutSideEffect from "../../CommonHooks/useClickOutSideEffect";

const HeaderUserbox = () => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const HandlerOnclickOutSide = (isOut) => {
    if (isOut) {
      console.log(isOut);
      setIsOpen(false);
    }
  };

  useClickOutSideEffect(wrapperRef, HandlerOnclickOutSide, true);

  const HandlerOnclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="userbox"
      className={isOpen ? "userbox open" : "userbox"}
      ref={wrapperRef}
    >
      <a href="#" data-toggle="dropdown" aria-expanded={isOpen}>
        <figure className="profile-picture">
          <img
            src={LoggedUser}
            alt="Joseph Doe"
            className="img-circle"
            data-lock-picture={LoggedUser}
          />
        </figure>
        <div
          className="profile-info"
          data-lock-name="John Doe"
          data-lock-email="johndoe@JSOFT.com"
        >
          <span className="name">John Doe Junior</span>
          <span className="role">administrator</span>
        </div>

        <i className="fa custom-caret" onClick={HandlerOnclick}></i>
      </a>

      <div className="dropdown-menu">
        <ul className="list-unstyled">
          <li className="divider"></li>
          <li>
            <a role="menuitem" tabIndex="-1" href="pages-user-profile.html">
              <i className="fa fa-user"></i> My Profile
            </a>
          </li>
          <li>
            <a role="menuitem" tabIndex="-1" href="#" data-lock-screen="true">
              <i className="fa fa-lock"></i> Lock Screen
            </a>
          </li>
          <li>
            <a role="menuitem" tabIndex="-1" href="pages-signin.html">
              <i className="fa fa-power-off"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderUserbox;
