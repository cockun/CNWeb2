import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { callApi } from "../../utils/apiCaller";
import { Helper } from "../../utils/helper";
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
  },
}));

export default function ModalAccount(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState({
    name: "",
    fullname: "",
    author: "1",
    phone: "",
    address: "",
  });
  useEffect(() => {
    setOpen(props.show.show);
  }, [props.show.show]);

  useEffect(() => {
    setData(props.show.data);
  }, [props.show]);

  const handleChangeSelect = (event) => {
    setData({ ...data, author: event.target.value });
  };

  const btnOk = async () => {
    if (props.show.action === "POST") {
      console.log(data)
      await callApi("Account", "POST", data).catch((error)=>{
        console.log(error)
      });
      props.handleClose(data, props.show.action);
    } else {
      let tmp = props.allData.data.find((item) => {
        if (item.name === data.name && item._id !== data._id) {
          return item;
        }
      });
      if (tmp) {
        swal("Tên đã tồn tại", "Ấn OK để tiếp tục!", "error");
      } else {
        if (props.show.action === "POST") {
        } else {
          if (props.show.action === "PUT") {
            callApi("Account/" + data._id, props.show.action, data);
          }
        }
        props.handleClose(data, props.show.action);
        swal("Good job!", "Ấn OK để tiếp tục!", "success");
      }
    }
  };
  console.log(data)
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
                <h2 style={classes.tittle}>Tài khoản</h2>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    ID:
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.name}
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Tên tài khoản:
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.fullname}
                    onChange={(e) => {
                      setData({ ...data, fullname: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Quyền:
                  </span>

                  <select
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    _id="cars"
                    value={data.author}
                    onChange={handleChangeSelect}
                  >
                    <option value="1">User</option>
                    <option value="0">Admin</option>
                  </select>
                </div>
                <h2>Thông tin cá nhân</h2>
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
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Địa chỉ
                  </span>

                  <TextareaAutosize
                    style={{ flex: 2, marginLeft: "10px" }}
                    aria-label="maximum height"
                    rowsMin={10}
                    placeholder="Nhập địa chỉ "
                    value={data.address}
                    onChange={(e) => {
                      setData({ ...data, address: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  style={{ marginRight: 10 }}
                  variant="outlined"
                  onClick={() => {
                    props.handleClose();
                    setData({
                      name: "",
                      fullname: "",
                      author: "",
                      phone: "",
                      address: "",
                    });
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
