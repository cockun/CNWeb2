import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Helper } from "../../utils/helper";
import TableData from "./TableData";
import { callApi } from "../../utils/apiCaller";
import TableBill from "./TableBill";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: 30,
  },
  container: {
    display: "flex",
    margin: "10px",
    width: "500px",
    height: "700px",
    flexDirection: "column",
  },
  textContainer: {
    flex: 1,
    marginTop: "36px",
  },
  btnContainer: {
    height: "20px",
    alignSelf: "center",
  },
  rowText: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    flexDirection: "row",
  },
  rowText1: {
    right: 10,
  },
}));

export default function ModalBill(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState({});
  useEffect(() => {
    setOpen(props.show.show);
    setData(props.show.data);
  }, [props.show]);

  const btnOk = async () => {
    props.handleClose(data, props.show.action);
  };
  console.log(data);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.container}>
              <div className={classes.textContainer}>
                <h2 style={classes.tittle}>Thông tin Bill</h2>
                <div className={classes.rowText}>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginRight: 5,
                    }}
                  >
                    ID:
                  </span>

                  <input
                    style={{ marginRight: "auto", height: "30px" }}
                    size="5"
                    type="text"
                    value={data._id}
                    onChange={(e) => {
                      setData({ ...data, _id: e.target.value });
                    }}
                  />
                  <div className={classes.rowText1}>
                    <span
                      style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                    >
                      Tổng tiền:
                    </span>

                    <input
                      style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                      type="text"
                      value={data.total}
                      onChange={(e) => {
                        setData({ ...data, total: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <h2>Thông tin cá nhân</h2>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Họ Tên:
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.fullname}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (e.target.value !== "") {
                        if (Helper.checkNumber(e.target.value)) {
                          setData({ ...data, fullname: e.target.value });
                        }
                      } else {
                        setData({ ...data, fullname: "" });
                      }
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Địa chỉ:
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.address}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (e.target.value !== "") {
                        if (Helper.checkNumber(e.target.value)) {
                          setData({ ...data, address: e.target.value });
                        }
                      } else {
                        setData({ ...data, address: "" });
                      }
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Số điện thoại:
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.phone}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (e.target.value !== "") {
                        if (Helper.checkNumber(e.target.value)) {
                          setData({ ...data, phone: e.target.value });
                        }
                      } else {
                        setData({ ...data, phone: "" });
                      }
                    }}
                  />
                </div>
                <div
                  className={classes.rowText}
                  style={{ width: "100%", height: "270px" }}
                >
                  <TableBill
                    data={{ type: "billInfo", data: props.show.data.billinfo }}
                  />
                </div>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  style={{ marginRight: 10 }}
                  variant="outlined"
                  onClick={() => {
                    props.handleClose();
                  }}
                >
                  Đóng
                </Button>
                <Button onClick={btnOk} variant="contained" color="primary">
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
