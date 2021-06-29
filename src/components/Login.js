import React from "react";
import "../css/Login.css";
import { Link, Redirect, Switch, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { callApi } from "../utils/apiCaller";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: "",
      pass: "",
      redirect: false,
    };

    this.check = this.check.bind(this);
  }

  async check(e) {
    e.preventDefault();
    if (this.state.name == "" || this.state.pass == "") {
      swal("Thông báo!", "Tài khoản và mật khẩu không được để trống", "error");
    } else {

      const coc = {
        
        
          USERNAME:this.state.name,
          PASSWORD:this.state.pass
        
      }
      // axios({
      //   method: 'POST',
      //   url: 'http://localhost:3000/api/accounts/login',
      //   data: coc
      // })
      //   .then(function (response) {
      //     console.log(response.data);
      //   });
      callApi('accounts/login', 'POST', coc).then((res) => {
        console.log(res.data);
        const data = res.data.data;
        console.log(data.ROLENAME);
        if (res.data) {
          if (data.ROLENAME=== "User") {
            localStorage.setItem("myAccountInfo", JSON.stringify(res.data));
            swal("Chào mừng!", "Bạn đã đăng nhập thành công!", "success").then(
              () => {
                this.props.history.push("/");
              }
            );

            
          } else {
            localStorage.setItem("myAccountInfo", JSON.stringify(data));
            swal(
              "Chào mừng!",
              "Bạn đã đăng nhập thành công với tư cách admin",
              "success"
            ).then(() => {
              this.props.history.push("/Admin");
            });
          }
        }
        else
        {
          swal("Thông báo!", "Đăng nhập thất bại", "error");
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="register-login-section spad">
            <div className="containerlogin">
              <div className="loginform">
                <div className="collogin">
                  <form>
                    <div className="login-form">
                      <h2>Đăng nhập</h2>
                      <form action="#" className="form" onSubmit={this.check}>
                        <div className="group-input">
                          <label for="username">
                            Tên tài khoản hoặc email *
                          </label>
                          <input
                            type="text"
                            id="username"
                            value={String(this.state.name)}
                            onChange={(txt) => {
                              this.setState({ name: txt.target.value });
                            }}
                          />
                        </div>
                        <div className="group-input">
                          <label for="pass">Mật khẩu *</label>
                          <input
                            type="text"
                            id="pass"
                            value={String(this.state.pass)}
                            onChange={(txt) => {
                              this.setState({ pass: txt.target.value });
                            }}
                            type="password"
                          />
                        </div>
                        <div className="group-input gi-check"></div>
                        <button type="submit" className="site-btn login-btn">
                          ĐĂNG NHẬP
                        </button>
                      </form>
                      <div className="switch-login">
                        <Link to="/Register" className="or-login">
                          Hoặc Tạo tài khoản mới
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
