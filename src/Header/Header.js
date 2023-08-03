import HeaderLogo from "./HeaderLogo";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo></HeaderLogo>
      <HeaderRight></HeaderRight>
    </header>
  );
};

export default Header;
