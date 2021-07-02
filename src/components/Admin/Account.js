import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import ModalAccount from "./ModalAccount";
import TableData from "./TableData";
import swal from "sweetalert";

export default function Account() {
  const [state, setState] = useState({
    data: [],
    type: "Account",
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
    callApi("accounts/filter", "GET", obj).then((res) => {
      setState({ ...state, data: res.data.data });
    });
  };
  const handleChangePage = (newPage) => {
    console.log(newPage);
    const obj = { PAGEINDEX: newPage + 1, PAGESIZE: page.PAGESIZE };
    callApi("accounts/filter", "GET", obj).then((res) => {
      setState({ ...state, data: res.data.data });
    });
    setPage({ ...page, PAGEINDEX: newPage });
  };
  const handleOpen = (item, a) => {
    setShowModal({ data: item, show: true, action: a });
  };
  const deleteItem = (id) => {
    try {
      callApi("accounts/delete/" + id, "DELETE").then((res) => {
        const obj = { PAGEINDEX: page.PAGEINDEX, PAGESIZE: page.PAGESIZE };
        callApi("accounts/filter", "GET", obj).then((res) => {
          setState({ ...state, data: res.data.data });
        });
      });
      swal("Đã xóa", {
        icon: "success",
      });
    } catch (e) {
      swal("Error", {
        icon: "Warning",
      });
    }

    callApi("accounts/filter", "GET", { ...page }).then((res) => {
      setState({ ...state, data: res.data.data });
    });
  };

  const handleClose2 = (item, action) => {
    // if (item) {
    //   let data = state.data.map((a) => {
    //     if (a.ACCOUNTID === item.ACCOUNTID) {
    //       return item;
    //     } else {
    //       return a;
    //     }
    //   });
    //   setState({ ...state, data: data });
    // }
    // if (action === "POST") {
    //   callApi("api/accounts/filter", "GET", {}).then((res) => {
    //     setState({ ...state, data: res.data.data });
    //   });
    //   setPage({
    //     PAGEINDEX: 1,
    //     PAGESIZE: 10,
    //   });
    // }

    setShowModal({ data: {}, show: false });
  };
  useEffect(() => {
    callApi("accounts/filter", "GET", { ...page }).then((res) => {
      setState({ ...state, data: res.data.data, count: res.data.count });
    });
  }, []);

  const search = (e) => {
    setPage({ PAGEINDEX: 1, PAGESIZE: 10 });
    const obj = { PAGEINDEX: 1, PAGESIZE: 10, FULLNAME: e.target.value };
    callApi("accounts/filter", "GET", obj).then((res) => {
      setState({ ...state, data: res.data.data , count : res.data.count });
    });

    

    setChangeText({ value: e.target.value });
  };

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
          <p>Tài khoản</p>
        </div>
        <div style={{ marginRight: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              handleOpen(
                { NAME: "", FULLNAME: "", author: "", PHONE: "", ADDRESS: "" },
                "POST"
              );
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
        <div>
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
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  data={{ data: changeText.data, type: "Account" }}
                />
              );
            }
          })} */}
        </div>
      </div>

      <ModalAccount
        allData={state}
        show={showModal}
        handleClose={handleClose2}
      />
    </div>
  );
}
