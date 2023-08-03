import HeaderSearch from "./HeaderSearch";
import HearderNotification from "./HeaderNotification/HeaderNotification";
import HeaderUserbox from "./HeaderUserbox";

const HeaderRight = () => {
  return (
    <div className="header-right">
      <HeaderSearch></HeaderSearch>
      <span className="separator"></span>
      <HearderNotification></HearderNotification>
      <span className="separator"></span>
      <HeaderUserbox></HeaderUserbox>
    </div>
  );
};

export default HeaderRight;
