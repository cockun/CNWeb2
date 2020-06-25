
import React from 'react';
import '../Css/Login.css';
import Header from './Header';
import Footer from './Footer'

export default class Login extends React.Component {
  render() {
    return (
      <div>
          <div>
            <Header/>
          </div>
          <div>
          
    <div className="register-login-section spad">
        <div className="containerlogin">
            <div className="loginform">
                <div className="collogin">
                    <div className="login-form">
                        <h2>Login 213</h2>
                        <form action="#" className="form">
                            <div className="group-input">
                                <label for="username">Username or email address *</label>
                                <input type="text" id="username"/>
                            </div>
                            <div className="group-input">
                                <label for="pass">Password *</label>
                                <input type="text" id="pass"/>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

          </div>

            <div>
            <Footer/>
            </div>
      </div>



    );
  }
}

