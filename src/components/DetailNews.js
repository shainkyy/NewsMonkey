import React, { Component } from "react";

export default class DetailNews extends Component {
  render() {
    return (
      <div className="container gap-Top">
        <div className="row">
          <div className="col-sm-12">
            <center>
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/10/21/1600x900/Deepika_Padukone_1697856632342_1697856639782.jpg"
                className="card-img-top"
                alt="..."
              />
            </center>

            <h5>
              Deepika Padukone changes from sizzling dress for night out with
              Shah Rukh Khan and family into chic airport look: Watch -
              Hindustan Times
            </h5>
            <div className="d-flex justify-content-between py-1">
              <p>
                <strong>HT Entertainment Des</strong>
              </p>
              <p>Sat Oct 21 2023</p>
            </div>

            <p>
              Mark Zuckerberg has unveiled a two-account feature for
              WhatsApp.\r\nNumerous corporate offices have embraced WhatsApp for
              their internal communications, appreciating its comfort and
              convenience. The ch… [+1601 chars]
            </p>
          </div>
        </div>
      </div>
    );
  }
}
