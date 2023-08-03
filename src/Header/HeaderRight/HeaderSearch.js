const HeaderSearch = () => {
  return (
    <form action="pages-search-results.html" className="search nav-form">
      <div className="input-group input-search">
        <input
          type="text"
          className="form-control"
          name="q"
          id="q"
          placeholder="Search..."
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
  );
};

export default HeaderSearch;
