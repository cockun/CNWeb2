import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import TextField from "@material-ui/core/TextField";
import { callApi } from "../../utils/apiCaller";

import TableData from "./TableData";
import ModalBill from "./ModalBill";
import { Helper } from "../../utils/helper";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

// var date2 =
//   today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

var date2 = new Date();
console.log(Helper.convertDateToString(date2));

export default function Bill() {
  const [page, setPage] = useState({
    page: 1,
    limit: 10,
  });
  const [state, setState] = useState({
    data: [],
    type: "Bill",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    data: {},
    action: "show",
  });
  const [changeText, setChangeText] = useState({
    value: "",
    data: [],
  });
  const [date, setDate] = useState({
    fromDate: "2018-06-28",
    toDate: "2020-06-28",
  });
  const handleOpen = (item, a) => {
    setShowModal({ data: item, show: true, action: "show" });
  };

  const handleClose2 = () => {
    setShowModal({ data: { billInfo: [{ a: 2 }] }, show: false });
  };
  useEffect(() => {
    callApi("Bill/page/" + page.page + "/" + page.limit, "GET").then((res) => {
      setState({ ...state, data: res.data });
    });
  }, []);

  const filterDate = (e) => {
    let fromDate = document.getElementById("fromDate");
    let toDate = document.getElementById("toDate");
    if (toDate.value !== "" && fromDate !== "") {
      callApi("Bill/filter/" + fromDate + "/" + toDate, "GET").then((res) => {
        setState({ ...state, data: res.data });
      });
    }
    console.log(toDate.value);
    console.log("a");
  };
  const search = (e) => {
    if (e.target.value !== "") {
      callApi("Bill/search/fullname" + "/" + e.target.value, "GET").then(
        (res) => {
          setState({ ...state, data: res.data });
        }
      );
    } else {
      callApi("Bill/page/" + page.page + "/" + page.limit, "GET").then(
        (res) => {
          setState({ ...state, data: res.data });
        }
      );
    }

    setChangeText({ value: e.target.value });
  };

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setPage({ ...page, limit: rowsPerPage });
    callApi("Bill/page/" + (page.page + 1) + "/" + rowsPerPage, "GET").then(
      (res) => {
        setState({ ...state, data: res.data });
      }
    );
  };
  const handleChangePage = (newPage) => {
    callApi("Bill/page/" + (newPage + 1) + "/" + page.limit, "GET").then(
      (res) => {
        setState({ ...state, data: res.data });
      }
    );
    setPage({ ...page, page: newPage });
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
          <p>Đơn hàng</p>
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

          <span style={{ marginLeft: 30 }}>Tìm kiếm:</span>
          <form className={{ flex: 1, marginRight: 20 }} noValidate>
            <TextField
              id="toDate"
              label="Đến ngày"
              type="date"
              defaultValue=""
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={() => {
                filterDate();
              }}
            />
          </form>
          <form className={{ flex: 1, marginLeft: 20 }} noValidate>
            <TextField
              id="fromDate"
              label="Từ ngày"
              type="date"
              defaultValue=""
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                filterDate();
              }}
            />
          </form>
        </div>

        <div>
          <TableData
            handleOpen2={handleOpen}
            handleChangePage={handleChangePage}
            data={state}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
          {/* {[{ a: 2 }].map(() => {
            if (changeText.value === "") {
              return <TableData handleOpen2={handleOpen} data={state} />;
            } else {
              return (
                <TableData
                  handleOpen2={handleOpen}
                  data={{ data: changeText.data, type: "Bill" }}
                />
              );
            }
          })} */}
        </div>
      </div>
      <ModalBill allData={state} show={showModal} handleClose={handleClose2} />
    </div>
  );
}
