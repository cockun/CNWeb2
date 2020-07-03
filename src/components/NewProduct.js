import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "../styles.css";
import { callApi } from "../ultis/apiCaller";
import { Link } from "react-router-dom";
import { Helper } from "../utils/helper";
import "../css/Product.css";

var lengthD = 0
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 12,
      currentPage: 1,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    callApi(`Products/page/`+(this.state.currentPage+1)+'/'+this.state.perPage, "GET", null).then((res) => {
      const data = res.data;

      const postData = data.map((pd, index) => (
        <React.Fragment key={index}>
          <Link to={`/Detail/${pd._id}`} className="Product">
            <div className="productImgCont">
              <img src={pd.src} className="productImg" alt="" />
            </div>
            <div className="productTitleCont">
              <span
                style={{ color: "#252525", fontWeight: 400, fontSize: 15 }}
                className="nameofProduct"
              >
                {pd.name}
              </span>
              <div className="priceofProduct">
                <span style={{ color: "red", fontWeight: 700, fontSize: 22 }}>
                  {Helper.formatDollar(pd.pirce2)}đ
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "#636363",
                    fontWeight: 400,
                    textDecorationLine: "line-through",
                  }}
                >
                  {Helper.formatDollar(pd.price)}đ
                </span>
              </div>
            </div> 
          </Link>
        </React.Fragment>
      ));

      this.setState({
        pageCount: Math.ceil(lengthD/this.state.perPage),

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
     var lengthData = async () => {
      await callApi(`Products/get/length`, "GET", null).then((res) => {
       lengthD =  res.data;
      });
    };
    lengthData();
    this.receivedData();
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
