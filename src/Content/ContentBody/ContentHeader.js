const ContenHeader = (props) => {
  const { name, links } = props;
  return (
    <header className="page-header">
      <h2>{name}</h2>

      <div className="right-wrapper pull-right">
        <ol className="breadcrumbs">
          <li>
            <a href="#">
              <i className="fa fa-home"></i>
            </a>
          </li>
          {links.map((child, index) => (
            <li key={index}>
              <span>{child}</span>
            </li>
          ))}
        </ol>

        <a className="sidebar-right-toggle" data-open="sidebar-right">
          <i className="fa fa-chevron-left"></i>
        </a>
      </div>
    </header>
  );
};

export default ContenHeader;
