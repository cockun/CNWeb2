import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import TextField from "@material-ui/core/TextField";
import { callApi } from "../../utils/apiCaller";
import ModalAccount from "./ModalAccount";
import TableData from "./TableData";
import ModalBill from "./ModalBill";
import { Helper } from "../../utils/helper";

// var date2 =
//   today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

var date = Helper.parseStringToDate("16-06-2020");
var date2 = new Date(
  "15-05-2020".replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
);

export default function Bill() {
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
    callApi("Bill", "GET").then((res) => {
      setState({ ...state, data: res.data });
    });
  }, []);

  const search = (e) => {
    let tmp = state.data.filter((item) => {
      return item.fullname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setChangeText({ value: e.target.value, data: [...tmp] });
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
         
        </div>

        <div>
          {[{ a: 2 }].map(() => {
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
          })}
        </div>
      </div>
      <ModalBill allData={state} show={showModal} handleClose={handleClose2} />
    </div>
  );
}
