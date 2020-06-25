import React from "react";
import "../css/Login.css";
import {
    Link
} from "react-router-dom";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:[],
            name :'',
            pass:'',
            
        }
        
        this.check = this.check.bind(this);
        
      }
      
      async check() {
        let resp = await fetch(
          'https://5ee5aa77ddcea00016a37721.mockapi.io/Account'
        );
        let respJson = await resp.json();
        this.setState({ data: respJson });
        let a = parseInt(respJson.length);
        let b = 0;
    
        for (var i = 0; i < a; i++) {
          if (
            String(respJson[i].name) == String(this.state.name) &&
            String(respJson[i].password) == String(this.state.pass)
          ) {
            alert('Đăng nhập thành công');
            break;
          }
          if (i == a - 1) {
            alert('Sai tài khoản hoặc mật khẩu');
            break;
          }
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
<<<<<<< HEAD
                    <div className="login-form">
                        <h2>Login</h2>
                        <form action="#" className="form" onSubmit={this.check}>
                            <div className="group-input">
                                <label for="username">Username or email address *</label>
                                <input type="text" id="username" value={String(this.state.name)} 
                                onChange={ (txt) => {
                                  this.setState({name:txt.target.value})
                                  
                                } } />
                            </div>
                            <div className="group-input">
                                <label for="pass">Password *</label>
                                <input type="text" id="pass" value={String(this.state.pass)} 
                                onChange={ (txt) => {
                                  this.setState({pass:txt.target.value})
                                  
                                } }
                                
                                />
                            </div>
                            <div className="group-input gi-check">
                                <div className="gi-more">
                                    <label for="save-pass">
                                        Save Password
                                        <input type="checkbox" id="save-pass"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <a href="#" className="forget-pass">Forget your Password</a>
                                </div>
                            </div>
                            <button type="submit" className="site-btn login-btn">Sign In</button>
                        </form>
                        <div className="switch-login">
                            <a href="./register.html" className="or-login">Or Create An Account</a>
=======
                  <div className="login-form">
                    <h2>Login</h2>
                    <form action="#" className="form">
                      <div className="group-input">
                        <label for="username">
                          Username or email address *
                        </label>
                        <input type="text" id="username" />
                      </div>
                      <div className="group-input">
                        <label for="pass">Password *</label>
                        <input type="text" id="pass" />
                      </div>
                      <div className="group-input gi-check">
                        <div className="gi-more">
                          <label for="save-pass">
                            Save Password
                            <input type="checkbox" id="save-pass" />
                            <span className="checkmark"></span>
                          </label>
                          <Link to="#" className="forget-pass">
                            Forget your Password
                          </Link>
>>>>>>> 14Nov
                        </div>
                      </div>
                      <button type="submit" className="site-btn login-btn">
                        Sign In
                      </button>
                    </form>
                    <div className="switch-login">
                      <Link to="/Register" className="or-login">
                        Or Create An Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div>
          
        </div>
        
      </div>
    );
  }
}
