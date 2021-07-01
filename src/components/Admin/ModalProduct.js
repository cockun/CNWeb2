import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { callApi } from "../../utils/apiCaller";
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
    ID:"",
    NAME: "",
    PRICE: "",
    CATEGORYID:"",
    IMGSRC: "",
    DISCOUNT: "",
    DESCRIPTION:"",

});
  useEffect(() => {
    setOpen(props.show.show);
  }, [props.show.show]);

  useEffect(() => {
    if (props.show.data) {
      setData(props.show.data);
    }
  }, [props.show]);

  const btnOk = async () => {
    try {
      if (props.show.action === "POST") {
        await callApi("products/add", "POST", data);
      } else {
        
          
            
          callApi("products/update" ,"UPDATE" , data).then((res)=>{
              console.log(res.data)
          });
        
      }
      props.handleClose(data, props.show.action);
    swal("Good job!", "Thành công hãy đợi trang reload!", "success");

    setTimeout(function(){ window.location.reload(); }, 3000);
    }catch (e){
      swal("Error", "Ấn OK để tiếp tục!", "warning");
    }

    
  };

  const onChangee = (e) => {
    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = (e) => {
      setData({ ...data, src: e.target.result });
      console.log(data);
    };
  };

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
                <h2 style={classes.tittle}>Thông tin sản phảm</h2>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    ID sản phẩm
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.ID}
                    onChange={(e) => {
                      setData({ ...data, ID: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Tên sản phẩm
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.NAME}
                    onChange={(e) => {
                      setData({ ...data, NAME: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Loại sản phẩm
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.CATEGORYID}
                    onChange={(e) => {
                      setData({ ...data, CATEGORYID: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <div style={{ width: "33%" }}>
                    <span
                      style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                    >
                      Hình ảnh
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.IMGSRC}
                    onChange={(e) => {
                      setData({ ...data, IMGSRC: e.target.value });
                    }}
                  />
                  </div>
                </div>
                <h2>Giá sản phẩm</h2>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Giá 1:
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.PRICE}
                    onChange={(e) => {
                      setData({ ...data, PRICE: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Giá 2
                  </span>

                  <input
                    style={{ flex: 2, marginLeft: "10px", height: "30px" }}
                    type="text"
                    value={data.DISCOUNT}
                    onChange={(e) => {
                      setData({ ...data, DISCOUNT: e.target.value });
                    }}
                  />
                </div>
                <div className={classes.rowText}>
                  <span
                    style={{ flex: 1, fontSize: "15px", fontWeight: "bold" }}
                  >
                    Miêu tả sản phẩm
                  </span>

                  <TextareaAutosize
                    style={{ flex: 2, marginLeft: "10px" }}
                    aria-label="maximum height"
                    rowsMin={10}
                    placeholder="Nhập "
                    value={data.DESCRIPTION}
                    onChange={(e) => {
                      setData({ ...data, DESCRIPTION: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  style={{ marginRight: 10 }}
                  variant="outlined"
                  onClick={() => {
                    
                    setData({
                      ID:"",
                      NAME:"",
                      PRICE:"",
        
                      IMGSRC: "",             
                      DISCOUNT: "",
                      DESCRIPTION: "",
                    
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
