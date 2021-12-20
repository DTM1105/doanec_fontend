import React, { Component } from 'react';

class DanhSachKH extends Component {
    render() {
        return (
            <div>
  <div className="name">Danh sách khách hàng</div>
  <div className="xanhnhat">
    <ul className="thaotac">
      <li className="lctt">
        <select name="luachonkyhan">
          <option value="luahcon">Lựa chọn</option>
          <option value="id">ID</option>
          <option value="hoten">Họ và tên</option>
        </select>
      </li>
      <li className="lctt">
        <input type="text" />
      </li>
      <li className="lctt">
        <button>Tìm kiếm</button>
      </li>
    </ul>
    <ul className="bang">
      <table border={1}>
        <tbody><tr>
            <td>STK</td>
            <td>Họ và tên</td>
            <td>
              <select name="locgioitinh">
                <option value="gioitinh">Giới tính</option>
                <option value="nam">Nam</option>
                <option value="nu">Nữ</option>
              </select>
            </td>
            <td>
              <select name="locsotiengui">
                <option value="sotiengui">Số tiền gửi</option>
                <option value="duoi1000">Dưới 1000$</option>
                <option value="1000den2000">1000$ - 2000$</option>
                <option value="tren2000">Trên 2000$</option>
              </select>
            </td>
            <td>
              <select name="lockyhan">
                <option value="kyhan">Kỳ hạn</option>
                <option value="1thang">1 tháng</option>
                <option value="2_12thang">2 - 12 tháng</option>
                <option value="1518thang">15, 18 tháng</option>
                <option value="24thang">24 tháng</option>
                <option value="36thang">36 tháng</option>
              </select></td>
            <td />
          </tr>
          <tr><td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td>
              xem chi tiết
            </td>
          </tr></tbody></table>
    </ul>
  </div>
</div>

        );
    }
}

export default DanhSachKH;