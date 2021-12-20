import React from 'react';
import {useState,useEffect} from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
const optionGioiTinh=[
  {value:'Nam',label:'Nam'},
  {value:'Nữ',label:'Nữ'}
]
function DangkiB1 (){
  const navigate = useNavigate();

  const [selectedOptionGioiTinh,setselectedOptionGioiTinh]=useState("");
  const handleChange = (e) => {
    setselectedOptionGioiTinh(e);
    console.warn(`Gioi Tinh:`, e);
  };

  const [email,setemail]=useState("");
  const [sdt, setsdt]=useState("");
  const [tenkh, settenkh]=useState("");
  const [diachi, setdiachi]=useState("");
  const gioitinh=selectedOptionGioiTinh.value;
  const [ngaysinh, setngaysinh]=useState("");
  const [quoctich, setquoctich]=useState("");
  const [cmnd_cccd, setcmnd_cccd]=useState("");
  const [username,setusername]=useState("");
  const role =["user"];
    const [password,setpassword]=useState("");

    async function signUp(){
      let dki_tkkh ={username,email,password,role,cmnd_cccd,diachi,gioitinh,ngaysinh,quoctich,sdt,tenkh};
      console.warn(dki_tkkh);
     let result = await fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/signup",{
          method:"POST",
          body:JSON.stringify(dki_tkkh),
          headers:{"Content-Type":"application/json",
          "Accept":"application/json"}
      });
      result= await result.json();
      localStorage.setItem("user-info",JSON.stringify(result));
      navigate("/dangkitaikhoanb2");
      }

        return (
            <div>
                <div>
  <div className="name">Đăng ký tài khoản</div>
  <div className="chinhsuathongtincanhan">
    <h3 className="tieude">Thông tin cơ bản </h3>
    <ul className="thongtin">
      <li className="mh ">Tên đăng nhập</li>
      <li className="mh tt"> <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}
      className="form-control" placeholder="username" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh ">Mật khẩu</li>
      <li className="mh tt"> <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}
            className="form-control" placeholder="password"/></li>
    </ul>
    <ul className="thongtin">
      <li className="mh ">Họ và tên</li>
      <li className="mh tt"> <input type="text" value={tenkh} onChange={(e)=>settenkh(e.target.value)}
      className="form-control" placeholder="Tên"/></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Ngày tháng năm sinh</li>
      <li className="mh tt"> <input type="date" value={ngaysinh} onChange={(e)=>setngaysinh(e.target.value)}
            className="form-control" placeholder="ngày sinh" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Giới tính</li>
      <li className="mh tt">
      <Select
        value={selectedOptionGioiTinh}
        onChange={handleChange}
        options={optionGioiTinh}
      />
      </li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Số CCCD</li>
      <li className="mh tt"> <input type="text" value={cmnd_cccd} onChange={(e)=>setcmnd_cccd(e.target.value)}
            className="form-control" placeholder="CMND/CCCD" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">ĐTDD</li>
      <li className="mh tt"> <input type="text" value={sdt} onChange={(e)=>setsdt(e.target.value)}
            className="form-control" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Email đã đăng ký Paypal</li>
      <li className="mh tt"> <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}
            className="form-control" placeholder="Email@gmail.com" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Địa chỉ</li>
      <li className="mh tt"> <input type="text" value={diachi} onChange={(e)=>setdiachi(e.target.value)}
            className="form-control" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Quốc tịch</li>
      <li className="mh tt"> <input type="text" value={quoctich} onChange={(e)=>setquoctich(e.target.value)}
            className="form-control"/></li>
    </ul>
    <ul className="thongtin dongydieukhoan">
      <input type="checkbox" />Tôi đồng ý cung cấp thông tin và cho phép KPMH sử dụng thông tin theo các quy định tại Chính sách bảo mật thông tin
    </ul>
    <div className="auth-form__controls">
    <div className="btn btn-danger" style={{textAlign: 'center'}} onClick={signUp}>Tiếp tục</div>
    </div>
  </div>
</div>
{/* <NavLink to="dangkitaikhoanb2" style={({ isActive }) => {
          return { display: "block", color: isActive ? "yellow" : "", backgroundColor:isActive ? "black":""};}} */}
            </div>
        );
}

export default DangkiB1;