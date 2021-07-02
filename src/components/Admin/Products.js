import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import ModalProduct from "./ModalProduct";
import TableData from "./TableData";

export default function Account() {
  const [state, setState] = useState({
    data: [],
    type: "Products",
    count: 0,
  });
  const [showModal, setShowModal] = useState({
    show: false,
    data: {},
    action: "",
  });
  const [changeText, setChangeText] = useState({
    value: "",
    data: [],
  });

  const [page, setPage] = useState({
    PAGEINDEX: 1,
    PAGESIZE: 10,
  });


  const handleChangeRowsPerPage = (rowsPerPage) => {
    setPage({ ...page, PAGESIZE: rowsPerPage });
    const obj = { PAGEINDEX: page.PAGEINDEX + 1, PAGESIZE: page.rowsPerPage };
    callApi("products/filter", "GET", obj).then((res) => {
      console.log(res.data)
      setState({ ...state, data: res.data.data });
    });
  };
  const handleChangePage = (newPage) => {
    const obj = { PAGEINDEX: newPage + 1, PAGESIZE: page.PAGESIZE };
    callApi("products/filter", "GET", obj).then((res) => {
     
      setState({ ...state, data: res.data.data });
    });
    setPage({ ...page, PAGEINDEX: newPage });
  };
  const handleOpen = (item, a) => {
    setShowModal({ data: item, show: true, action: a });
  };
  const deleteItem = (id) => {
    try {
      callApi("products/delete/" + id, "DELETE").then((res)=>{
        if(res.data!=null)
        {
          window.location.reload();
        }   
      });
      swal("Đã xóa", {
        icon: "success",
      });
      
    } catch (e) {
      swal("Error", {
        icon: "Warning",
      });
    }

    callApi("products/filter", "GET", { ...page }).then((res) => {
      setState({ ...state, data: res.data.data });
    });
  };

  const search = (e) => {
    setPage({ PAGEINDEX: 1, PAGESIZE: 10 });
    const obj = { PAGEINDEX: 1, PAGESIZE: 10, NAME: e.target.value };
    callApi("products/filter", "GET", obj).then((res) => {
      setState({ ...state, data: res.data.data , count : res.data.count });
    });


    setChangeText({ value: e.target.value });
  };

  

  const handleClose2 = (item, action) => {
    // if (item) {
    //   let data = state.data.map((a) => {
    //     if (a._id === item._id) {
    //       return item;
    //     } else {
    //       return a;
    //     }
    //   });
    //   setState({ ...state, data: data });
    // }
    // if (action === "POST") {
    //   callApi("Products/page/" + 1 + "/" + 10, "GET").then((res) => {
    //     setState({ ...state, data: res.data });
    //   });
    //   setPage({
    //     page: 1,
    //     limit: 10,
    //   });
    // }

    setShowModal({ data: {}, show: false });
  };
  useEffect(() => {
    callApi("products/filter", "GET", { ...page }).then((res) => {
      setState({ ...state, data: res.data.data, count: res.data.count });
    });
  }, []);

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.titleContainer}>
          <p>Sản phẩm</p>
        </div>
        <div style={{ marginRight: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              handleOpen({
                ID:"",
                NAME:"",
                PRICE:"",
                CATEGORYID:"",
                IMGSRC:"",             
                DISCOUNT:"",
                DESCRIPTION:"",
               
              }, "POST");
            }}
          >
            Thêm mới
          </Button>
        </div>
      </div>

      <div className={{}}>
        <div className={classes.searchContainer}>
          <input
            type="text"
            className={classes.textSeacch}
            value={changeText.value}
            onChange={(e) => {
              search(e);
            }}
          />
          <span>Tìm kiếm:</span>
        </div>
        <TableData
          handleOpen2={handleOpen}
          handleChangePage={handleChangePage}
          data={state}
          deleteItem2={deleteItem}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />

        {/* {[{ a: 2 }].map(() => {
          if (changeText.value === "") {
            return (
              <TableData
                handleOpen2={handleOpen}
                handleChangePage={handleChangePage}
                data={state}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
              />
            );
          } else {
            return (
              <TableData
                handleOpen2={handleOpen}
                handleChangePage={handleChangePage}
                data={{ data: changeText.data, type: "Products" }}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
              />
            );
          }
        })} */}
      </div>
      <ModalProduct allData={state} show={showModal} handleClose={handleClose2} />
    </div>
  );
}
