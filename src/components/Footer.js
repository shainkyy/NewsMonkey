import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="pb-3  bg-dark py-2 mt-4">
        <footer>
          <ul className="nav justify-content-center border-bottom ">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                NewsMonkey
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-info">
                Product By MadEnzineers
              </a>
            </li>
          </ul>
          <p className="text-center text-light">
            MadEnzineers © 2023 Company, Inc
          </p>
        </footer>
      </div>
    );
  }
}
