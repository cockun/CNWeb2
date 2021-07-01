import React, { useState } from "react";
import "../css/ChangePass.css";
import { callApi } from "../ultis/apiCaller";
import swal from "sweetalert";
function ChangePass() {
  const [nowPass, setNowPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [renewPass, setRenewPass] = useState("");
  const savePass = () => {
    if(nowPass ==="" || renewPass ==="" || nowPass ===""){
      swal("Thông báo!", "Vui Lòng Nhập Đầy Đủ Thông Tin !!!", "error");
      return;
    }
    callApi(
      "accounts/getid/" + JSON.parse(localStorage.getItem("myAccountInfo")).data.ACCOUNTID,
      "GET"
    ).then((res) => {
      console.log(res.data);
      if (res.data.data.PASSWORD !== nowPass) {
        swal("Thông báo!", "Sai Mật Khẩu! Vui Lòng Kiểm Tra Lại!", "error");
      } else {
        if (newPass !== renewPass) {
          swal(
            "Thông báo!",
            "Mật Khẩu Nhập Lại Không Đúng! Vui Lòng Kiểm Tra Lại",
            "error"
          );
        } else {
          callApi(
            "accounts/update",
            "PUT",
            { 
              data:{
                ID: JSON.parse(localStorage.getItem("myAccountInfo")).data.ACCOUNTID,
                USERNAME: JSON.parse(localStorage.getItem("myAccountInfo")).data.USERNAME,
                PASSWORD: newPass
              }
            }
          ).then(() => {
            swal("Thông báo!", "Đổi Mật Khẩu Thành Công", "success");
          });
        }
      }
    });
  };
  return (
    <div className="changePassCont">
      <h2>Thay Đổi Mật Khẩu</h2>

      <div className="inputChange">
        <span>Mật khẩu hiện tại: </span>
        <input
          type="password"
          placeholder="input here...."
          onChange={(e) => setNowPass(e.target.value)}
        ></input>
      </div>
      <div className="inputChange">
        <span>Mật khẩu mới: </span>
        <input
          type="password"
          placeholder="input here...."
          onChange={(e) => setNewPass(e.target.value)}
        ></input>
      </div>
      <div className="inputChange">
        <span>Nhập lại mật khẩu mới: </span>
        <input
          type="password"
          placeholder="input here...."
          onChange={(e) => setRenewPass(e.target.value)}
        ></input>
      </div>
      <button className="btnChange" onClick={savePass}>
        Lưu Thay Đổi
      </button>
    </div>
  );
}

export default ChangePass;
