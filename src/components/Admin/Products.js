import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";

import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import ModalProduct from "./ModalProduct";
import TableData from "./TableData";

export default function Account() {
  const [state, setState] = useState({
    data: [],
    type: "Products",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    data: {},
    action: "",
  });
  const handleOpen = (item, a) => {
    setShowModal({ data: item, show: true, action: a });
  };
  const [changeText, setChangeText] = useState({
    value: "",
    data: [],
  });

  const [page, setPage] = useState({
    page: 1,
    limit: 10,
  });

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setPage({ ...page, limit: rowsPerPage });
    callApi("Products/page/" + (page.page + 1) + "/" + rowsPerPage, "GET").then(
      (res) => {
        setState({ ...state, data: res.data });
      }
    );
  };
  const handleChangePage = (newPage) => {
    callApi("Products/page/" + (newPage + 1) + "/" + page.limit, "GET").then(
      (res) => {
        setState({ ...state, data: res.data });
      }
    );
    setPage({ ...page, page: newPage });
  };

  const search = (e) => {
    if (e.target.value !== "") {
      callApi("Products/search/name" + "/" + e.target.value, "GET").then(
        (res) => {
          setState({ ...state, data: res.data });
        }
      );
    } else {
      callApi("Products/page/" + page.page + "/" + page.limit, "GET").then(
        (res) => {
          setState({ ...state, data: res.data });
        }
      );
    }

    setChangeText({ value: e.target.value });
  };

  const deleteItem = () => {
    callApi( state.type +  "/page/" + page.page + "/" + page.limit, "GET").then(
      (res) => {
        setState({ ...state, data: res.data });
      }
    );
  };

  const handleClose2 = (item, action) => {
    if (item) {
      let data = state.data.map((a) => {
        if (a._id === item._id) {
          return item;
        } else {
          return a;
        }
      });
      setState({ ...state, data: data });
    }
    if (action === "POST") {
      callApi("Products/page/" + 1 + "/" + 10, "GET").then((res) => {
        setState({ ...state, data: res.data });
      });
      setPage({
        page: 1,
        limit: 10,
      });
    }

    setShowModal({ data: {}, show: false });
  };
  useEffect(() => {
    callApi("Products/page/" + page.page + "/" + page.limit, "GET").then(
      (res) => {
        setState({ ...state, data: res.data });
      }
    );
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
              handleOpen({}, "POST");
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
          deleteItem2 ={deleteItem}
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
      <ModalProduct show={showModal} handleClose={handleClose2} />
    </div>
  );
}
