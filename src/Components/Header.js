import React from 'react';
import {NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
function Header() {
  let tkkh = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();
    function logOut(){
        localStorage.clear();
        navigate("/");
        window.location.reload(<Footer/>);
    }
    function createTKTK(){
      navigate("/dangkitaikhoanb2")
  }
        return (
            <div>
            <div id="header">
            <NavLink to="/" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPolE5yEUdYksRnOowCZp591iyIFyzudqvPA&usqp=CAU" width="100px" height="84px" /></NavLink>
  
  <div>
    <table border={0}>
      <tbody><tr>
          <td rowSpan={2}><i className=" fa fa-phone" aria-hidden="true" /></td>
          <td>Dịch vụ khách hàng 24/7</td>
        </tr>
        <tr>
          <td>19001069</td>
        </tr>
      </tbody></table>
  </div>
  <ul>
    <li><NavLink to="tietkiem" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Tiết kiệm</NavLink></li><i className="fa fa-piggy-bank" aria-hidden="true" />
    <li><NavLink to="thongtinlaisuat" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Lãi suất</NavLink> </li> <i className="fa fa-money " aria-hidden="true" />
   
    
          {localStorage.getItem('user-info')?
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle mr-sm-2" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {tkkh && tkkh.username}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {localStorage.getItem('tktk-info0')?
        <a className="dropdown-item" href="#" onClick={createTKTK}>Mở sổ tiết kiệm</a>
        :null}
          <a className="dropdown-item" href="#" onClick={logOut}>Đăng suất</a>
        </div>
      </li>
      :<li><NavLink to="dangnhap" style={({ isActive }) => {
        return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Đăng Nhập</NavLink></li>}
        <i className=" fa fa-user" aria-hidden="true" />
  </ul>
  
</div>
<div>
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
     
    </ul>
  </div>
</nav> */}
</div>
</div>
        );
}

export default Header;