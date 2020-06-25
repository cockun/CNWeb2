import React from 'react';
import '../css/Register.css';
import {Link} from 'react-router-dom'
export default class Register extends React.Component {
  render() {
    return (
      <div>
          <div>
            
          </div>
          <div>
          <div class="register-login-section spad">
        <div class="container2">
            <div class="row">
                <div class="colregister">
                    <div class="register-form">
                        <h2>Register</h2>
                    <form action="#">
                            <div class="group-input">
                                <label for="username">Username or email address *</label>
                                <input type="text" id="username"/>
                            </div>
                            <div class="group-input">
                                <label for="pass">Password *</label>
                                <input type="text" id="pass"/>
                            </div>
                            <div class="group-input">
                                <label for="con-pass">Confirm Password *</label>
                                <input type="text" id="con-pass"/>
                            </div>
                            <button type="submit" class="site-btn register-btn">REGISTER</button>
                    </form>
                        <div class="switch-login">
                            <Link to="/Login" class="or-login">Or Login</Link>
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

