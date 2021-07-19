import React from 'react'
import Contact1 from '../image/contact.jpg'
import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked , faPhone , faMailBulk } from '@fortawesome/free-solid-svg-icons'
function Contact(){
    return(
        <div >
          
            <div className="ContactCont">
                <img src={Contact1} className="ContactBanner" alt="Trung tâm chăm sóc khách hàng"/>
                <div className="ContactUs">
                    <div className="ContWWidth">
                        <p className="ContactTitle">Trung tâm chăm sóc khách hàng </p>
                        
                        <div className="subContactTitle">
                        Nếu bạn có thắc mắc hoặc cần giúp đỡ về những điều khoản của Shop 
                        Xin vui lòng liên lạc bằng những thông tin bên dưới đễ nhận được hỗ trợ 
                        sớm nhất có thể 
                        </div>
                        <div className="contactOption">
                            <div className="OptionCT">
                                <div className="iconCT">
                                    <FontAwesomeIcon icon={faMapMarked} />
                                </div>
                                <div className="CTWay">
                                    <p className="CTWayTitle">Địa chỉ: </p>
                                    <p className="CTWayContent">280 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="OptionCT">
                                <div className="iconCT">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="CTWay">
                                    <p className="CTWayTitle">SĐT:</p>
                                    <p className="CTWayContent">028 3835 20204</p>
                                </div>
                            </div>
                            <div className="OptionCT">
                                <div className="iconCT">
                                    <FontAwesomeIcon icon={faMailBulk} />
                                </div>
                                <div className="CTWay">
                                    <p className="CTWayTitle">Đường dây nóng</p>
                                    <p className="CTWayContent">028 3835 2020334</p>
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact