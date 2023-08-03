import Logo from "../Asset/images/logo.png";

const HeaderLogo = () => {
  return (
    <div className="logo-container">
      <a href="../" className="logo">
        <img src={Logo} height="35" alt="JSOFT Admin" />
      </a>
      <div
        className="visible-xs toggle-sidebar-left"
        data-toggle-class="sidebar-left-opened"
        data-target="html"
        data-fire-event="sidebar-left-opened"
      >
        <i className="fa fa-bars" aria-label="Toggle sidebar"></i>
      </div>
    </div>
  );
};

export default HeaderLogo;
