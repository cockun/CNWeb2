import React from "react";
import "../css/Transaction.css";
import { Link, Redirect, Switch, withRouter } from "react-router-dom";
import swal from "sweetalert";
import { callApi } from "../utils/apiCaller";
import axios from "axios";
class Transaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: "",
      pass: "",
      privatekey:"",
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
          PASSWORD:this.state.pass,
          PRIVATEKEY:this.state.privatekey
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
      
        const data = res.data.data;
    

        if (data!=null) {
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
                      <h2>Giao dịch</h2>
                      <form action="#" className="form" onSubmit={this.check}>
                        <div className="group-input">
                          <label for="username">
                            Địa chỉ ví gửi
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
                          <label for="pass"> Địa chỉ ví nhận</label>
                          <input
                            type="text"
                            id="pass"
                            value={String(this.state.pass)}
                            onChange={(txt) => {
                              this.setState({ pass: txt.target.value });
                            }}
                            type="text"
                          />
                        </div>
                        <div className="group-input">
                          <label for="username">
                            Số lượng
                          </label>
                          <input
                            type="text"
                            id="username"
                            value={String(this.state.privatekey)}
                            onChange={(txt) => {
                              this.setState({ privatekey: txt.target.value });
                            }}
                          />
                        </div>
                        <div className="group-input gi-check"></div>
                        <button type="submit" className="site-btn login-btn">
                          Giao dịch
                        </button>
                      </form>
                      
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
export default withRouter(Transaction);
