import React, { Component } from "react";
import logo from "../components/assets/images/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const pathurl = window.location.pathname;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark text-light">
          <div className="container-fluid">
            <img src={logo} className="img-responsive Navlogo" />
            <Link className="navbar-brand text-light" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-light"
              id="navbarSupportedContent"
            >
              {window.screen.width <= 768 ? (
                <div
                  className="scroll d-flex justify-content-between"
                  style={{ width: `${window.screen.width - 30}px` }}
                >
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/business" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/entertainment" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/general" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/general"
                  >
                    General
                  </Link>
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/health" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>

                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/science" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/sports" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                  <Link
                    className={`nav-link  spaceInMobile ${
                      pathurl === "/technology" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </div>
              ) : (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/business" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/entertainment" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/general" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/general"
                    >
                      General
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/health" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/health"
                    >
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/science" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/science"
                    >
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/sports" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link text-light spaceInDesk ${
                        pathurl === "/technology" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
}
