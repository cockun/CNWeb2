import React from "react";
import "../css/Login.css";
import { Link, Redirect, Switch, withRouter } from "react-router-dom";
import swal from "sweetalert";

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
      let resp = await fetch(
        "https://my-appcoc.herokuapp.com/Account"
      );
      let respJson = await resp.json();
      this.setState({ data: respJson });
      let a = parseInt(respJson.length);
      let b = 0;

      for (var i = 0; i < a; i++) {
        if (
          String(respJson[i].name) === String(this.state.name) &&
          String(respJson[i].password) === String(this.state.pass)
        ) {
          if (respJson[i].author === "1") {
            swal("Chào mừng!", "Bạn đã đăng nhập thành công!", "success").then(
              () => {
                this.props.history.push("/");
              }
            );

            sessionStorage.setItem(
              "myAccountInfo",
              JSON.stringify(respJson[i])
            );
            console.log(JSON.parse(sessionStorage.getItem("myAccountInfo")))

            break;
          } else {
            sessionStorage.setItem(
              "myAccountInfo",
              JSON.stringify(respJson[i])
            );
            swal(
              "Chào mừng!",
              "Bạn đã đăng nhập thành công với tư cách admin",
              "success"
            ).then(() => {
              this.props.history.push("/Admin");
            });
         
            break;
          }
        }
        if (i === a - 1) {
          swal("Thông báo!", "Đăng nhập thất bại", "error");

          break;
        }
      }
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Home" />;
    }
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
                        <div className="group-input gi-check">
                          
                        </div>
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
