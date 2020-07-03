import React, { useState } from "react";
import "../css/ChangePass.css";
import { callApi } from "../ultis/apiCaller";
import swal from "sweetalert";
function ChangePass() {
  const [name, setName] = useState(JSON.parse(localStorage.getItem("myAccountInfo")).fullname);
  const [phone, setPhone] = useState(JSON.parse(localStorage.getItem("myAccountInfo")).phone);
  const [addr, setAddr] = useState(JSON.parse(localStorage.getItem("myAccountInfo")).address);
 
  const savePass = () => {
    console.log(name)
    console.log(phone)
    console.log(addr)
    if (name === "" || phone === "" || addr === "") {
      swal("Thông báo!", "Vui Lòng Nhập Đầy Đủ Thông Tin!!!", "error");
    } else {
      callApi(
        "Account/" + JSON.parse(localStorage.getItem("myAccountInfo"))._id,
        "PUT",
        { fullname: name,
          phone: phone,
          address: addr,
        }
      ).then(() => {
        swal("Thông báo!", "Cập Nhật Thông Tin Thành Công", "success");
      });
    }
  };
  return (
    <div className="changePassCont">
      <h2>Thay Đổi Thông Tin</h2>

      <div className="inputChange">
        <span>Họ và tên: </span>
        <input
          type="text"
          placeholder="input here...."
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <div className="inputChange">
        <span>Số điện thoại: </span>
        <input
          type="text"
          placeholder="input here...."
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        ></input>
      </div>
      <div className="inputChange">
        <span>Địa chỉ: </span>
        <input
          type="text"
          placeholder="input here...."
          onChange={(e) => setAddr(e.target.value)}
          value={addr}
        ></input>
      </div>
      <button className="btnChange" onClick={savePass}>
        Lưu Thay Đổi
      </button>
    </div>
  );
}

export default ChangePass;
