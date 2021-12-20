import React, { Component } from 'react';

class Thongtin extends Component {
    render() {
        return (
            <div>
  <div className="ls1">
    <p className="ls">Gửi tiền tiết kiệm trực tuyến có kỳ hạn </p>
  </div>
  <div id="GioiThieu1">
    <p id="gth1">Giới thiệu</p>
    <hr id="line1" />
    <p id="gth2">
      Tham gia sản phẩm Tiền gửi tích lũy trực tuyến, bạn sẽ được linh hoạt gửi góp mỗi ngày tiện lợi trên VCB Digibank, đảm bảo tương lai tài chính bền vững với những ưu đãi vượt trội của sản phẩm:
      Linh hoạt tích lũy tiền gửi theo kế hoạch tài chính của mình với mức lãi suất tiền gửi có kỳ hạn.
      Gửi và rút dễ dàng, tiện lợi  trên ngân hàng trực tuyến VCB Digibank.
      An toàn, chính xác, bảo mật tuyệt đối với các phương thức xác thực hiện đại.
    </p>
  </div>
  <p />
  <div id="GioiThieu2">
    <p id="gth3">Đặc điểm sản phẩm</p>
    <hr id="line2" />
    <table id="gth4" border={1}>
      <tbody><tr>
          <td style={{paddingLeft: '120px'}}> Loại tiền</td>
          <td>VNG</td>
        </tr>
        <tr>
          <td style={{paddingLeft: '5px'}}> Số tiền và Phương thức gửi gốc</td>
          <td>
            <ul>
              <li>Số tiền gốc ban đầu: Tối thiểu 400 $</li>
              <li>Số tiền gốc gửi định kỳ: Tối thiểu 40 $
                <br />
                Được gửi thêm tiền  gốc trong kỳ hạn, linh hoạt với 02 hình thức:
              </li>
              <li>Gửi gốc định kỳ tự động theo chu kỳ tháng/quý</li>
              <li>Gửi gốc tối đa 01 lần/tháng theo nhu cầu của khách hàng</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style={{paddingLeft: '5px'}}> Loại tài khoản</td>
          <td>
            <ul>
              <li>Tiền gửi có kỳ hạn</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style={{paddingLeft: '5px'}}> Kỳ hạn</td>
          <td>
            <ul>
              <li>Kỳ hạn gốc 12 tháng, 24 tháng</li>
              <li>Kỳ hạn con: các kỳ hạn từ dưới 1 tháng đến dưới 24 tháng</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style={{paddingLeft: '5px'}}> Phương thức trả lãi</td>
          <td>
            <ul>
              <li>Cuối kỳ</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style={{paddingLeft: '5px'}}> Lãi suất</td>
          <td>
            <ul>
              <li>Cố định trong suốt kỳ hạn gửi </li>
              <li>Rút trước hạn: Áp dụng sàn lãi suất không kỳ hạn </li>
            </ul>
          </td>
        </tr>
      </tbody></table>
  </div>
  <p />
  <div id="GioiThieu3">
    <p id="gth5">Điều kiện tham gia</p>
    <hr id="line3" />
    <div id="gth6">
      <ul>
        <li>Khách hàng cá nhân là công dân Việt Nam có CMND/ CCCD/ Hộ chiếu còn thời hạn hiệu lực.</li>
        <li>Khách hàng cá nhân nước ngoài được phép cư trú tại Việt Nam từ 06 tháng trở lên và kỳ hạn gửi tiến
          không được dài hơn thời hạn hiệu lực còn lại của giấy tờ xác minh thông tin của khách hàng.
        </li>
      </ul>
    </div>
  </div></div>

        );
    }
}

export default Thongtin;