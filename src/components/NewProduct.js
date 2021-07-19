import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "../styles.css";
import { callApi } from "../utils/apiCaller";
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
      perPage: 10,
      currentPage: 1,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData(data) {
  

      const postData = data.map((pd, index) => (
        <React.Fragment key={index}>
          <Link to={`/Detail/${pd.ID}`} className="Product">
            <div className="productImgCont">
              <img src={pd.IMGSRC} className="productImg" alt={pd.NAME} />
              <span style={{fontWeight: 'bold'}}>{pd.NAME}</span>
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
                  {Helper.formatDollar(pd.PRICE)}đ
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "#636363",
                    fontWeight: 400,
                    textDecorationLine: "line-through",
                  }}
                >
                  {Helper.formatDollar(pd.DISCOUNT)}đ
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
    
  }

   handlePageClick = async (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    const obj = {PAGEINDEX:selectedPage +1, PAGESIZE : this.state.perPage}
    var data = await this.fetchData(obj);
    this.setState(  
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
       
        this.receivedData(data.data.data);
      }
    );
      


  };

  fetchData = async (obj)=>{

     return await callApi(`products/filter`, "GET", obj);

  }

  async componentDidMount() {
    const obj = {PAGEINDEX:this.state.currentPage, PAGESIZE : this.state.perPage}
    var data = await this.fetchData(obj);
  

    lengthD  =data.data.count;
    this.receivedData(data.data.data);
  } 
  render() {
  
    return (
      <div className="productContainer">
        {/* <div class="dropdown">
          <button class="dropbtn">Filter</button>
            <div class="dropdown-content">
              <a href="#">Sort By Default</a>
              <a href="#">Sort By Price Desc</a>
              <a href="#">Sort By Price Aesc</a>
              <a href="#">Sort By Popularity</a>
            </div>
        </div> */}
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
