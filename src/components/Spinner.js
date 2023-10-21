import React, { Component } from "react";
import spinner from "../components/assets/images/spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <center>
          <img src={spinner} alt="Loading" className="spinner-size" />
        </center>
      </div>
    );
  }
}
