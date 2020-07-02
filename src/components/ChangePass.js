import React, { useState } from "react";
import "../css/ChangePass.css";
import { callApi } from "../ultis/apiCaller";
import swal from "sweetalert";
function ChangePass() {
  const [nowPass, setNowPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [renewPass, setRenewPass] = useState("");
  const savePass = () => {
    callApi(
      "Account/" + JSON.parse(sessionStorage.getItem("myAccountID")),
      "GET"
    ).then((res) => {
      if (res.data.password !== nowPass) {
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
            "Account/" + JSON.parse(sessionStorage.getItem("myAccountID")),
            "PUT",
            { password: newPass }
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
