import React from 'react';
import '../css/Register.css';
import Header from './Header';
import Footer from './Footer';
import {callApi} from '../utils/apiCaller';

import '../css/Register.css';
import {Link} from 'react-router-dom'
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        data:[],
        name :'',
        pass:'',
        pass2:'',
        fullname:'',
        phone:'',
        address:''  
    }
    
    this.add = this.add.bind(this);
    
  }
  async add() {
    if (this.state.name !== '' && this.state.pass !== '') {
      let resp = await fetch(
        'https://5ee5aa77ddcea00016a37721.mockapi.io/Account'
      );
      let respJson = await resp.json();

      this.setState({ data: respJson });

      let a = parseInt(respJson.length);
      let jus = 1;
      for (var i = 0; i < a; i++) {
        if (String(this.state.name) == String(respJson[i].name)) {
          alert('Tên tài khoản đã tồn tại');
          jus = 0;
          break;
        }
      }
      if (jus === 1) {
        if (String(this.state.pass) == String(this.state.pass2)) {
          callApi('Account', 'POST', {
            id: '',
            name: this.state.name,
            password: this.state.pass,
            fullname:this.state.fullname,
            phone : this.state.phone,
            address:this.state.address
          });
          alert('Đăng ký thành công');
       
        }
        else
        {
          if (String(this.state.pass) != String(this.state.pass2)) {
            alert('Mật khẩu nhập lại không đúng');
          }
        }
      }     
    }
    else
    {
      alert('Vui lòng nhập đầy đủ thông tin!!!');
    }
  }
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
                    <form action="#" onSubmit={this.add}>
                            <div class="group-input">
                                <label for="username">Tài khoản</label>
                                <input type="text" id="username" value={String(this.state.name)} 
                                onChange={ (txt) => {
                                  this.setState({name:txt.target.value})
                                  
                                } } />
                            </div>
                            <div class="group-input">
                                <label for="pass">Mật Khẩu </label>
                                <input type="text" id="username" value={String(this.state.pass)} 
                                onChange={ (txt) => {
                                  this.setState({pass:txt.target.value})
                                  
                                } } />
                            </div>
                            <div class="group-input">
                                <label for="con-pass">Nhập lại mật khẩu</label>
                                <input type="text" id="username" value={String(this.state.pass2)} 
                                onChange={ (txt) => {
                                  this.setState({pass2:txt.target.value})
                                  
                                } } />
                            </div>
                            <div class="group-input">
                                <label for="con-pass">Họ và tên</label>
                                <input type="text" id="username" value={String(this.state.fullname)} 
                                onChange={ (txt) => {
                                  this.setState({fullname:txt.target.value})
                                  
                                } } />
                            </div>
                            <div class="group-input">
                                <label for="con-pass">SĐT</label>
                                <input type="text" id="username" value={String(this.state.phone)} 
                                onChange={ (txt) => {
                                  this.setState({phone:txt.target.value})
                                  
                                } } />
                            </div>
                            <div class="group-input">
                                <label for="con-pass">Địa chỉ</label>
                                <input type="text" id="username" value={String(this.state.address)} 
                                onChange={ (txt) => {
                                  this.setState({address:txt.target.value})
                                  
                                } } />
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

