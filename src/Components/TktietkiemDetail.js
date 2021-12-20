import React from 'react';
import {NavLink} from "react-router-dom";
function TktietkiemDetail(props) {
  let tktk = JSON.parse(localStorage.getItem("tktk-info"));
    return (
        <div>
            <div>
            <div>
                
                <div className="ls1">
      <div className="ls">Thông tin tài khoản</div>
      </div>
      <div className="info-acc">
        <div className="info-acc-header">
          <ul>
            <li>Họ và Tên: <span>{tktk.tenkh}</span></li>
          </ul>
          <ul>
      <li> Số tài khoản tiết kiệm: <span>{tktk.sotk}</span>
      </li>
    </ul>
        </div>
          <div className="info-money">
        <div>Tiền trong tài khoản</div>
        <div>
          <input type="text" name="Sotien" readOnly defaultValue={tktk.sotiengoc} />
        </div>
        <div className="info-money-date"> Hạn sử dụng : {tktk.ngaydaohan}  </div>
         <form action="/ruttien" method="past">
        <button type="submit">
          <i className="fa fa-check" aria-hidden="true" />Rút tiền
        </button>
        </form>
          </div>
        <div className="info-acc-list">
          {/* <div>
            <div className="info-acc-list-div-header-1"><i className="fas fa-money-check-alt" /></div>
            <div className="info-acc-list-div"><NavLink to="ruttien" style={({ isActive }) => {
              return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Rút tiền</NavLink></div>
          </div> */}
          <div>
            <div className="info-acc-list-div-header-1"><i className="fas fa-money-check-alt" /></div>
            <div className="info-acc-list-div"><NavLink to="naptien" style={({ isActive }) => {
              return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Nạp tiền</NavLink></div>
          </div>
          <div>
            <div className="info-acc-list-div-header"><i className="fas fa-info" /></div>
            <div className="info-acc-list-div"><NavLink to="thongtintaikhoan" style={({ isActive }) => {
              return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Thông tin tài khoản</NavLink></div>
          </div>
          {/* <div>
            <div className="info-acc-list-div-header-2"><a href="#"><i className="fas fa-money-check-alt" /></a></div>
            <div className="info-acc-list-div"><NavLink to="thongtinlaisuat" style={({ isActive }) => {
              return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}}>Thông tin lãi suất</NavLink></div>
          </div> */}
        </div>
      </div>
                </div>
          </div>
        </div>
    );
}

export default TktietkiemDetail;