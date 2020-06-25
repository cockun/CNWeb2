
import React from 'react';
import '../Css/Login.css';
import Header from './Header';
import Footer from './Footer'

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
            <Header/>
          </div>
          <div>
          
    <div className="register-login-section spad">
        <div className="containerlogin">
            <div className="loginform">
                <div className="collogin">
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

