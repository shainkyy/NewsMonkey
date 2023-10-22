import React, { Component } from "react";
import NewsList from "./NewsList";
import propTypes from "prop-types";
import Spinner from "./Spinner";
import logo from "../components/assets/images/logo.png";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 3,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loader: false,
      page: 1,
      isStatus: false,
    };
  }
  async UdateNews() {
    this.props.setProgress(10);
    this.setState({ loader: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await response.json();
    this.props.setProgress(70);

    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loader: false,
      isStatus: parsedData.code === "rateLimited" ? false : true,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.UdateNews();
  }

  handlePrev = () => {
    console.log("previous");
    this.setState({
      page: this.state.page - 1,
    });
    setTimeout(() => {
      this.UdateNews();
    }, 1000);
  };

  handleNext = () => {
    this.setState({
      page: this.state.page + 1,
    });
    setTimeout(() => {
      this.UdateNews();
    }, 1000);
  };

  CapatializeFirstChar(str) {
    const firstLetter = str.charAt(0).toUpperCase();
    const newStr = firstLetter + str.slice(1);
    return newStr;
  }

  render() {
    return (
      <div className="container gap-Top">
        <div className="d-flex justify-content-between py-4">
          <div>
            <button
              type="button"
              className="btn btn-dark btn-sm py-2"
              disabled={this.state.page <= 1}
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>
          </div>
          <h2
            className="text-center"
            style={{
              fontSize: window.screen.width > 414 ? " " : "16px",
              fontWeight: window.screen.width > 414 ? " " : "bold",
            }}
          >
            NewsMonkey {this.CapatializeFirstChar(this.props.category)}
            &nbsp;Headlines
            <hr className="text-undrerline" />
          </h2>
          <div>
            <button
              type="button"
              className="btn btn-dark btn-sm py-2"
              onClick={this.handleNext}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
        {this.state.loader && <Spinner />}
        <div className="row" style={{ minHeight: "660px" }}>
          {this.state.isStatus === true
            ? !this.state.loader &&
              this.state.article.map((element) => {
                return (
                  <NewsList
                    key={element.title}
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    name={element.source.name}
                  />
                );
              })
            : !this.state.loader && (
                <h1 className="text-center py-4">
                  <img src={logo} />
                  <br />
                  Error You Have Exceeded Daily Limit
                </h1>
              )}
        </div>
      </div>
    );
  }
}
