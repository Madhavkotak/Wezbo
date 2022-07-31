import React from "react";
function NavBar() {
  const about = async () => {
    await fetch("http://localhost:3001/about").then((res) => res.json());
  };
  const handleabout = () => {
    about();
  };
  return (
    <div className="main">
      <nav
        className=" navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "80px" }}
      >
        <a className="navbar-brand" href="/">
          Nirma University
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/placements">
                Placements <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/campus">
                Campus
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/hostel">
                Hostel
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/quiz">
                Quiz
              </a>
            </li>
            <li onClick={handleabout} className="nav-item active">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
