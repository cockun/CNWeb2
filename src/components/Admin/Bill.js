import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import ModalAccount from "./ModalAccount";
import TableData from "./TableData";
import ModalBill from "./ModalBill";
import TableBill from "./TableBill";

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
  const handleOpen = (item,a) => {
    setShowModal({ data: item, show: true, action: "show" });
  };

  const handleClose2 = () => {
    setShowModal({ data: {billInfo:[{a:2}]}, show: false });
  };
  useEffect(() => {
    callApi("Bill", "GET").then((res) => {
      setState({ ...state, data: res.data });
    });
  }, []);

  const search = (e) => {
    console.log(state.data);
    let tmp = state.data.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
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
          <input type="text" className={classes.textSeacch} value= {changeText.value} onChange={(e)=>{
            search(e);
          }} />
          <span>Tìm kiếm:</span>
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
