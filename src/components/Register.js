import React from "react";
import "../css/Register.css";
import swal from "sweetalert";
import { callApi } from "../ultis/apiCaller";
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
    };

    this.add = this.add.bind(this);
  }
  async add(e) {
    e.preventDefault();
    if (this.state.pass !== this.state.pass2) {
      swal("Thông báo!", "Nhập lại mật khẩu sai", "error");
    } else {
      if (this.state.name !== "" && this.state.pass !== "") {
        let resp = await fetch(
          "https://my-appcoc.herokuapp.com/Account"
        );
        let respJson = await resp.json();

        this.setState({ data: respJson });

        let a = parseInt(respJson.length);
        let jus = 1;
        for (var i = 0; i < a; i++) {
          if (String(this.state.name) === String(respJson[i].name)) {
            swal("Thông báo!", "Tên tài khoản đã tồn tại", "error");
            jus = 0;
            break;
          }
        }
        if (jus === 1) {
          if (String(this.state.pass) === String(this.state.pass2)) {
            callApi("Account", "POST", {
              id: "",
              name: this.state.name,
              password: this.state.pass,
              fullname: this.state.fullname,
              phone: this.state.phone,
              address: this.state.address,
              author: "1",
            });
            swal("Thông báo!", "Đăng ký thành công", "success").then(() => {
              this.props.history.push("/Login");
            });
          }
        }
      } else {
        swal("Thông báo!", "Vui lòng nhập đầy đủ thông tin!", "error");
      }
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
