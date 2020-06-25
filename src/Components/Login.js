import React from "react";
import "../css/Login.css";
import {
    Link
} from "react-router-dom";


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="register-login-section spad">
            <div className="containerlogin">
              <div className="loginform">
                <div className="collogin">
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
