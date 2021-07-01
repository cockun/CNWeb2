import React, { useState , useEffect } from "react";
import "../css/ChangePass.css";
import { callApi } from "../ultis/apiCaller";
import swal from "sweetalert";
function ChangePass() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");  
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");  

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("myAccountInfo")).data !== undefined){
      setName(JSON.parse(localStorage.getItem("myAccountInfo")).data.FULLNAME);
      setPhone(JSON.parse(localStorage.getItem("myAccountInfo")).data.PHONE);
      setAddr(JSON.parse(localStorage.getItem("myAccountInfo")).data.ADDRESS);
      setEmail(JSON.parse(localStorage.getItem("myAccountInfo")).data.EMAIL);
      setGender(JSON.parse(localStorage.getItem("myAccountInfo")).data.SEX);
    }

  }, [])
  
  const savePass = () => {
    if (name === "" || phone === "" || addr === "" || gender === "" || email === "") {
      swal("Thông báo!", "Vui Lòng Nhập Đầy Đủ Thông Tin!!!", "error");
    } else {
      callApi(
        "accountinfos/update",
        "PUT",
        {
          data:
          {
            ID: JSON.parse(localStorage.getItem("myAccountInfo")).data.ACCOUNTID,
            FULLNAME: name,
            PHONE: phone,
            ADDRESS: addr,
            SEX: gender,
            EMAIL: email
          }
        }
      ).then(() => {
        swal("Thông báo!", "Cập Nhật Thông Tin Thành Công", "success");
        const obj = { data:
          {
            ACCOUNTID: JSON.parse(localStorage.getItem("myAccountInfo")).data.ACCOUNTID,
            ADDRESS: addr,
            CREATEDATE: JSON.parse(localStorage.getItem("myAccountInfo")).data.CREATEDATE,
            FULLNAME: name,
            PHONE: phone,
            POINTS: JSON.parse(localStorage.getItem("myAccountInfo")).data.POINTS,
            ROLENAME: JSON.parse(localStorage.getItem("myAccountInfo")).data.ROLENAME,
            USERNAME: JSON.parse(localStorage.getItem("myAccountInfo")).data.USERNAME,
            SEX: gender,
            EMAIL: email
          }
        }
        localStorage.setItem("myAccountInfo",JSON.stringify(obj));
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
      <div className="inputChange">
        <span>Email: </span>
        <input
          type="text"
          placeholder="input here...."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div className="inputChange">
        <span>Giới Tính: </span>
        <input
          type="text"
          placeholder="input here...."
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        ></input>
      </div>
      <button className="btnChange" onClick={savePass}>
        Lưu Thay Đổi
      </button>
    </div> 
  );
}

export default ChangePass;
