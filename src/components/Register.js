import React from "react";
import "../css/Register.css";
import swal from "sweetalert";
import { callApi } from "../utils/apiCaller";
import { Link, withRouter } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      pass: "",
      pass2: "",
      fullname: "",
      phone: "",
      address: "",
      sex: "",
      birthday: "",
      email: "",
    };

    this.add = this.add.bind(this);
  }
  async add(e) {

    e.preventDefault();
    const a = this.state.phone;
    if (parseInt(a) >= 0 && this.state.phone.length >= 8) {
      if (this.state.pass !== this.state.pass2) {
        swal("Thông báo!", "Nhập lại mật khẩu sai", "error");
      } else {
        if (String(this.state.pass) === String(this.state.pass2)) {
          const obj = {

            "USERNAME": this.state.name,
            "PASSWORD": this.state.pass,
            "FULLNAME": this.state.fullname,
            "ADDRESS": this.state.address,
            "PHONE": this.state.phone,
            "ROLE": "1",
            "BIRTHDAY": new Date(this.state.birthday) ,
            "EMAIL": this.state.email,
            "SEX": this.state.sex,
          }
          callApi("accounts/add", "POST", obj).then((res) => {
            const check = res.data;
            console.log(check.data);
            console.log( this.state.birthday);
            var a = check.data;
            if (a == null) {
              swal("Thông báo!", "Lỗi", "error")
            }
            else {
              if (res.data) {
                swal("Thông báo!", "Đăng ký thành công", "success").then(() => {
                  this.props.history.push("/Login");
                }
                );
              }

            }


          })


        }

      }
    }
    else {
      swal("Thông báo!", "SĐT phải là chữ số và trên 8 ký tự", "error");
    }

  }
  render() {
    return (
      <div>
        <div></div>
        <div>
          <div class="register-login-section spad">
            <div class="container2">
              <div class="row">
                <div class="colregister">
                  <div class="register-form">
                    <h2>Đăng ký</h2>
                    <form
                      action="#"
                      onSubmit={(e) => {
                        this.add(e);
                      }}
                    >
                      <div class="group-input">
                        <label for="username">Tài khoản *</label>
                        <input
                          type="text"
                          id="username"
                          value={String(this.state.name)}
                          onChange={(txt) => {
                            this.setState({ name: txt.target.value });
                          }}
                        />
                      </div>
                      <div class="group-input">
                        <label for="pass">Mật Khẩu *</label>
                        <input
                          id="username"
                          value={String(this.state.pass)}
                          onChange={(txt) => {
                            this.setState({ pass: txt.target.value });
                          }}
                          type="password"
                        />
                      </div>
                      <div class="group-input">
                        <label for="con-pass">Nhập lại mật khẩu *</label>
                        <input
                          id="username"
                          value={String(this.state.pass2)}
                          onChange={(txt) => {
                            this.setState({ pass2: txt.target.value });
                          }}
                          type="password"
                        />
                      </div>
                      <div class="group-input">
                        <label for="con-pass">Họ và tên </label>
                        <input
                          type="text"
                          id="username"
                          value={String(this.state.fullname)}
                          onChange={(txt) => {
                            this.setState({ fullname: txt.target.value });
                          }}
                        />
                      </div>
                      <div class="group-input">
                        <label for="con-pass">SĐT</label>
                        <input
                          type="text"
                          id="username"
                          value={String(this.state.phone)}
                          onChange={(txt) => {
                            this.setState({ phone: txt.target.value });
                          }}
                        />
                      </div>
                      <div class="group-input">
                        <label for="con-pass">Địa chỉ</label>
                        <input
                          type="text"
                          id="username"
                          value={String(this.state.address)}
                          onChange={(txt) => {
                            this.setState({ address: txt.target.value });
                          }}
                        />
                      </div>
                      <div class="group-input">
                        <label for="con-pass">Giới tính</label>
                        <label for="vehicle1"> Nữ </label><br />
                        <input type="checkbox" id="girl" name="vehicle1" value="Nữ" onChange={(txt) => {
                          document.getElementById("boy").checked = false;
                            this.setState({ sex: txt.target.value });
                          }} />
                        <label for="vehicle1"> Nam</label><br />
                        <input type="checkbox" id="boy" name="vehicle1" value="Nam" onChange={(txt) => {
                            document.getElementById("girl").checked = false;
                            this.setState({ sex: txt.target.value });
                          }} />
                        
                      </div>
                      <div class="group-input">
                        <label for="con-pass">Email</label>
                        <input
                          type="text"
                          id="username"
                          value={String(this.state.email)}
                          onChange={(txt) => {
                            this.setState({ email: txt.target.value });
                          }}
                        />
                      </div>
                      <div class="group-input">
                        <label for="con-pass">Ngày sinh</label>
                        <input
                          type="datetime-local"
                          id="username"
                          value={(this.state.birthday)}
                          onChange={(txt) => {
                            this.setState({ birthday: txt.target.value });
                          }}
                        />
                      </div>
                      <button type="submit" class="site-btn register-btn">
                        ĐĂNG KÝ
                      </button>
                    </form>
                    <div class="switch-login">
                      <Link to="/Login" class="or-login">
                        Hoặc đăng nhập
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}
export default withRouter(Register);
