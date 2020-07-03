import React, { useState } from "react";
import "../css/AccUser.css";
import Bill from './ReviewBill' 
import ChangePass from './ChangePass'

function AccUser() {
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
          onClick={() => setOption("LogOut")}
        >
          Đăng Xuất
        </div>
      </div>
      
      <div className="contentOptCont">
        {option === "Bill" && <Bill />}
        {option === "Pass" && <ChangePass />}
        
      </div>
    </div>
  );
}

export default AccUser;
