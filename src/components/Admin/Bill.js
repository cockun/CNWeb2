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
    PAGEINDEX: 1,
    PAGESIZE: 10,
  });
  const [state, setState] = useState({
    data: [],
    type: "Bill",
    count: 0,
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
    toDate: "2022-03-28",
  });
  const handleOpen = (item, a) => {
    setShowModal({ data: item, show: true, action: "show" });
  };

  const handleClose2 = () => {
    setShowModal({ data: { billInfo: [{ a: 2 }] }, show: false });
  };
  useEffect(() => {
    callApi("bills/filter", "GET", { ...page }).then((res) => {
      setState({ ...state, data: res.data.data, count: res.data.count });
    });
  }, []);

  const filterDate = (e) => {
    let fromDate = document.getElementById("fromDate").value;
    let toDate = document.getElementById("toDate").value;

    setPage(
      { PAGEINDEX: 1,PAGESIZE: 10}
    )

    if (toDate !== "" && fromDate !== "") {
      const obj = {
        FROMDATE: new Date(document.getElementById("fromDate").value),
        TODATE: new Date(document.getElementById("toDate").value),
        ...page,
     
        
      };
      
      callApi("bills/filter/", "GET", obj).then((res) => {
        setState({ ...state, data: res.data.data, count: res.data.count });
      });
    }
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
    setPage({ ...page, PAGESIZE: rowsPerPage });
    const obj = { PAGEINDEX: page.PAGEINDEX + 1, PAGESIZE: page.rowsPerPage , };
    callApi("bills/filter", "GET", obj).then((res) => {
      console.log(res.data);
      setState({ ...state, data: res.data.data });
    });
  };
  // const deleteItem = () => {
  //   callApi( state.type +  "/page/" + page.page + "/" + page.limit, "GET").then(
  //     (res) => {
  //       setState({ ...state, data: res.data });
  //     }
  //   );
  // };

  const handleChangePage = (newPage) => {
    const obj = { PAGEINDEX: newPage + 1, PAGESIZE: page.PAGESIZE };
    callApi("bills/filter", "GET", obj).then((res) => {
      setState({ ...state, data: res.data.data });
    });
    setPage({ ...page, PAGEINDEX: newPage });
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
              // search(e);
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
            // deleteItem2={deleteItem}
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
