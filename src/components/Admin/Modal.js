import React, { useEffect } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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

  useEffect(() => {
    setOpen(props.show);
  }, [props.show]);

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
                    id="cars"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
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
                  />
                </div>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  style={{ marginRight: 10 }}
                  variant="outlined"
                  onClick={props.handleClose}
                >
                  Đóng
                </Button>
                <Button variant="contained" color="primary">
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
