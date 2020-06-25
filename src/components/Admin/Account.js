import React, { useEffect, useState } from "react";
import classes from "../../css/Account.module.css";
import TableAccount from "./TableAccount";
import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import ModalAccount from "./Modal";

export default function Account() {
  const [state, setState] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleOpen = (item) => {
    console.log(item);
    setShowModal(true);
  };

  const handleClose2 = () => {
    setShowModal(false);
  };
  useEffect(() => {
    callApi("Account", "GET").then((res) => {
      setState(res.data);
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
          <p>Tài khoản</p>
        </div>
        <div style={{ marginRight: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Thêm mới
          </Button>
        </div>
      </div>

      <div className={{}}>
        <div className={classes.searchContainer}>
          <input type="text" className={classes.textSeacch} />
          <span>Tìm kiếm:</span>
        </div>

        <TableAccount handleOpen2 ={handleOpen} data={state} />
      </div>
      <ModalAccount show={showModal} handleClose={handleClose2} />
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
    </div>
  );
}
