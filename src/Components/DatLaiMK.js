import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class DatLaiMK extends Component {
    render() {
        return (
            <div>
                <div className="ls1">
                <div className="ls">ĐẶT LẠI MẬT KHẨU</div>
                </div>
                <form className="sdt">
 
  <div className="setnewpw">
    <div className="setpw-input"><input style={{border:'none'}} type="text" name="SDT" placeholder="Nhập số điện thoại" /></div>
   <div className="setpw-input"> <input style={{border:'none'}} type="password" name="NewPw" placeholder="Nhập mật khẩu mới" /></div>
   <div className="setpw-input"> <input style={{border:'none'}} type="password" name="XacnhanMk" placeholder="Nhập xác nhận lại mật khẩu" /></div>
    <div className="btn btn-danger" style={{textAlign: 'center'}}>
        Đổi mật khẩu
    </div>
    <div style={{textAlign: 'center'}}><NavLink to="dangkitaikhoanb1" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Bạn chưa có tài khoản? Đăng kí</NavLink></div>
  </div>
</form>

            </div>
        );
    }
}

export default DatLaiMK;