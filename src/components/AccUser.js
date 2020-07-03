import React, { useState } from "react";
import "../css/AccUser.css";
import { withRouter } from "react-router-dom";
import Bill from "./ReviewBill";
import ChangePass from "./ChangePass";
import ChangeInfo from "./ChangeInfo";
import swal from "sweetalert";
function AccUser(props) {
  const [option, setOption] = useState("Bill");

  return (
    <div className="AccCont">
      <div className="optionAccCont">
        <div
          className={
            option !== "Bill" ? "optionAcc" : "optionAcc optionAccActive"
          }
          onClick={() => setOption("Bill")}
        >
          Xem Đơn Hàng
        </div>
        <div
          className={
            option !== "Pass" ? "optionAcc" : "optionAcc optionAccActive"
          }
          onClick={() => setOption("Pass")}
        >
          Thay Đổi Mật Khẩu
        </div>
        <div
          className={
            option !== "Info" ? "optionAcc" : "optionAcc optionAccActive"
          }
          onClick={() => setOption("Info")}
        >
          Thông Tin Tài Khoản
        </div>
        <div
          className={
            option !== "LogOut" ? "optionAcc" : "optionAcc optionAccActive"
          }
          onClick={() => {
            sessionStorage.clear();
            localStorage.clear();
            localStorage.setItem("myAccountInfo", JSON.stringify({}));
            sessionStorage.setItem("myCart", JSON.stringify([]));
            swal("Thông báo!", "Đăng xuất thành công", "success").then( () => props.history.push("/") );
            
          }}
        >
          Đăng Xuất
        </div>
      </div>

      <div className="contentOptCont">
        {option === "Bill" && <Bill />}
        {option === "Pass" && <ChangePass />}
        {option === "Info" && <ChangeInfo />}
      </div>
    </div>
  );
}

export default withRouter(AccUser);
