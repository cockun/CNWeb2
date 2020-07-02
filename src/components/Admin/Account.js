import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import ModalAccount from "./ModalAccount";
import TableData from "./TableData";

export default function Account() {
  const [state, setState] = useState({
    data: [],
    type: "Account",
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
  const handleOpen = (item, a) => {
    setShowModal({ data: item, show: true, action: a });
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
      callApi("Account", "GET").then((res) => {
        setState({ ...state, data: res.data });
      });
    }

    setShowModal({ data: {}, show: false });
  };
  useEffect(() => {
    callApi("Account", "GET").then((res) => {
      setState({ ...state, data: res.data });
    });
  }, []);
  const search = (e) => {
    console.log(state.data);
    let tmp = state.data.filter((item) => {
      return item.fullname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(tmp);
    setChangeText({ value: e.target.value, data: [...tmp] });
  };
  console.log(changeText.data);
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
                { name: "", fullname: "", author: "", phone: "", address: "" },
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
          {[{ a: 2 }].map(() => {
            if (changeText.value === "") {
              return <TableData handleOpen2={handleOpen} data={state} />;
            } else {
              return (
                <TableData
                  handleOpen2={handleOpen}
                  data={{ data: changeText.data, type: "Account" }}
                />
              );
            }
          })}
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
