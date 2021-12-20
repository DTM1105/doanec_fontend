import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
          <div>
             <p></p>
             <div id="footer">
             
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPolE5yEUdYksRnOowCZp591iyIFyzudqvPA&usqp=CAU" width="100px" height="84px" />
  <div>
    <h1>Liên Hệ</h1>
    <div>19110265@student.hcmute.edu.vn</div>
    <div>191102</div>
  </div>
  {localStorage.getItem('tktk-info0')?
  <div>
    <div>
    <h1>Tài khoản</h1>
    <div><NavLink to="user" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Thông tin tài khoản</NavLink></div>
    <div><NavLink to="dangkitaikhoanb2" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Mở sổ tiết kiệm</NavLink></div>
          <div><NavLink to="listtkthanhtoan" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Danh sách tài khoản thanh toán</NavLink></div>
           <div><NavLink to="taotkthanhtoan" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Tạo tài khoản thanh toán</NavLink></div>
          </div>
  <div>
  </div>
  </div>
  
  
  :<div>
  <h1>Quản lí</h1>
  <div><NavLink to="quanlikhachhang" style={({ isActive }) => {
        return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Danh sách tài khoản tiết kiệm</NavLink></div>
  <div><NavLink to="quanlitaikhoan" style={({ isActive }) => {
        return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Danh sách tài khoản</NavLink></div>
        <div><NavLink to="quanlitktt" style={({ isActive }) => {
        return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Danh sách tài khoản thanh toán</NavLink></div>
    </div>
}
{localStorage.getItem('tktk-info0')?
  <div>
  <div>
    <h1>Thông tin</h1>
    <div><NavLink to="gioithieu" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Giới Thiêụ</NavLink></div>
    <div>Đặc điểm sản phẩm</div>
    <div>Điều kiện tham gia</div>
    <div>Thông tin khảo sát</div>
  </div>
  </div>
  :<div>
    <h1>Thống kê doanh thu</h1>
    <div><NavLink to="thongketheothang" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Theo tháng</NavLink></div>
    <div><NavLink to="thongketheoquy" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Theo Quý</NavLink></div>
    <div><NavLink to="thongketheonam" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Theo Năm</NavLink></div>
    </div>
}
{localStorage.getItem('tktk-info0')?
  null
  :<div>
    <h1>Thống kê số lượng mở sổ</h1>
    <div><NavLink to="thongkeusertheothang" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Theo tháng</NavLink></div>
    <div><NavLink to="thongkeusertheoquy" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Theo Quý</NavLink></div>
    <div><NavLink to="thongkeusertheonam" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "white", backgroundColor:isActive ? "black":""};}}>Theo Năm</NavLink></div>
    </div>
}
</div>
          </div>
        );
    }
}

export default Footer;