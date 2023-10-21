import React, { Component } from "react";
import newsmonkey from "../components/assets/images/newsmonkey.png";

export default class NewsList extends Component {
  render() {
    let { title, description, urlToImage, url, author, publishedAt, name } =
      this.props;
    return (
      <>
        <div className="col-sm-4 py-2">
          <div className="card">
            <img
              src={urlToImage ? urlToImage : newsmonkey}
              className="card-img-top"
              alt={title}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>

              <div className="d-flex justify-content-between">
                <p>
                  <strong>
                    {author ? author.slice(0, 20) : "Not Mentioned"}
                  </strong>
                  <small className="text-primary">
                    &nbsp;<u>{new Date(publishedAt).toDateString()}</u>
                  </small>
                </p>
                <p>
                  <a href={url} className="btn btn-dark btn-sm" target="_blank">
                    Read More
                  </a>
                </p>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info"
                  style={{ zIndex: "1", marginLeft: "-30px" }}
                >
                  {name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
