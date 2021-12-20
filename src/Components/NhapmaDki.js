import React, { Component } from 'react';

class NhapmaDki extends Component {
    render() {
        return (
            <div>
                <div className="nhapma">
    <div style={{color: 'white', fontSize: '25px', paddingTop: '20px'}}>Nhập mã</div>
    <div className="xanhnhatnhapma">
      <p style={{fontSize: '24px', margin: '0%'}}>
        Thông báo
      </p>
      <p>
        Chúng tôi đã gửi một mã số đến địa chỉ email của bạn, vui lòng kiểm tra để lấy mã số, xin cảm ơn
        Mã sẽ hết hạn trong 60 giây
      </p>
    </div>
    <div>
      <input type="text" />
    </div>
    <div>
      <div className="auth-form__controls">
        <button className="btn">Gửi</button>
      </div>
    </div>
  </div>
            </div>
        );
    }
}

export default NhapmaDki;