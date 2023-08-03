const SidebarHeader = (props) => {
  const handleOnclick = () => {
    let root = document.querySelector("#rootHtml");

    root.classList.contains("sidebar-left-collapsed")
      ? root.classList.remove("sidebar-left-collapsed")
      : root.classList.add("sidebar-left-collapsed");
  };
  return (
    <div className="sidebar-header">
      <div className="sidebar-title">{props.name}</div>
      <div
        className="sidebar-toggle hidden-xs"
        data-toggle-class="sidebar-left-collapsed"
        data-target="html"
        data-fire-event="sidebar-left-toggle"
        onClick={handleOnclick}
      >
        <i className="fa fa-bars" aria-label="Toggle sidebar"></i>
      </div>
    </div>
  );
};

export default SidebarHeader;
