import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../styles.css";
import { callApi } from "../utils/apiCaller";
import { Link } from "react-router-dom";
import { Helper } from "../utils/helper";
import "../css/Product.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 12,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData(a) {
    callApi("products/filter?NAME="+a, "GET").then((res) => {
      const data = res.data.data;
  
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd, index) => (
        <React.Fragment key={index}>
          <Link to={`/Detail/${pd.ID}`} className="Product">
            <div className="productImgCont">
              <img src={pd.IMGSRC} className="productImg" alt="" />
            </div>
            <div className="productTitleCont">
              <span
                style={{ color: "#252525", fontWeight: 400, fontSize: 15 }}
                className="nameofProduct"
              >
                {pd.NAME}
              </span>
              <div className="priceofProduct">
                <span style={{ color: "red", fontWeight: 700, fontSize: 22 }}>
                  {Helper.formatDollar(pd.DISCOUNT)}đ
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "#636363",
                    fontWeight: 400,
                    textDecorationLine: "line-through",
                  }}
                >
                  {Helper.formatDollar(pd.PRICE)}đ
                </span>
              </div>
            </div>
          </Link>
        </React.Fragment>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
      });
    });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.receivedData(params.text);
  }

  componentDidUpdate(){
    const { match: { params } } = this.props;
    this.receivedData(params.text);
  }
  render() {
    return (
      <div className="productContainer">
        <div className="productMainPage">{this.state.postData}</div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
