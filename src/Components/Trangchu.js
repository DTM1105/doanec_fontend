import React, { Component } from 'react';

class Trangchu extends Component {
    render() {
        return (
            <div>
  <div id="body">
    <div id="left_icon">
      <i className="fa fa-piggy-bank" aria-hidden="true" />
    </div>
    <div id="middle-text">
      <p>Your
        <span style={{color: '#FFFF00'}}>Money</span> Your<span style={{color: '#FFFF00'}}> Way</span>
      </p>
      <p>
        Gửi tiền có kì hạn- Lãi suất hấp dẫn
      </p>
    </div>
    <div id="hinhanh">
      <img src="0f4b19be99ff52a10bee.jpg" />
    </div>
  </div>
  <div id="bottom_body">
    <p id="Ud"> Ưu điểm</p>
    <table width="100%" border={0}>
      <tbody><tr>
          <td width="25%">
            <div>
              <img src="z2947166489831_32eaf2756685775c7d52250943658af1.jpg" id="hinhanh_btbody1" />
              <p />
              <p id="gdnc">Giao dịch nhanh chóng 24/7</p>
            </div>
          </td>
          <td width="25%">
            <div>
              <img src="z2947166490064_40346df23e1301b1df2007123fd39a13.jpg" id="dothi1" />
              <p />
              <p id="lshd">Lãi suất hấp dẫn</p>
            </div>
          </td>
          <td width="25%">
            <div>
              <img src="z2947171051684_41509aa58897bb92d113ab7d30b8fa8b.jpg" id="khien1" />
              <p />
              <p id="khien">Bảo mật an toàn</p>
            </div>
          </td>
          <td width="25%">
            <div>
              <img src="kihanlinhhoat.webp" id="kyhan" />
              <p />
              <p id="khlh">Kỳ hạn linh hoạt</p>
            </div>
          </td>
        </tr>
      </tbody></table>
  </div>
</div>

        );
    }
}

export default Trangchu;