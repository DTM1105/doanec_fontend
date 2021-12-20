import React from 'react';
import {NavLink} from "react-router-dom";
import {useState,useEffect} from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const optionLoaitien=[
  {value:'VND',label:'VND'},
  {value:'USD',label:'USD'}
]
const optionLanhLai=[
  {value:'F_MONTH',label:'Theo Tháng'},
  {value:'F_QUARTERLY',label:'Theo Quý'},
  {value:'F_YEAR',label:'Theo Năm'}
]
const optionTaiTuc=[
  {value:'KHONG_TAI_TUC',label:'Không tái tục'},
  {value:'TAI_TUC_VON',label:'Tái tục vốn'},
  {value:'TAI_TUC_VON_LAN_LAI',label:'Tái tục vốn lẫn lãi'}
]
const optionKyHan=[
  {value:'1_MONTH',label:'1 tháng'},
  {value:'2_MONTH',label:'2 tháng'},
  {value:'3_MONTH',label:'3 tháng'},
  {value:'4_MONTH',label:'4 tháng'},
  {value:'5_MONTH',label:'5 tháng'},
  {value:'6_MONTH',label:'6 tháng'},
  {value:'7_MONTH',label:'7 tháng'},
  {value:'8_MONTH',label:'8 tháng'},
  {value:'9_MONTH',label:'9 tháng'},
  {value:'10_MONTH',label:'10 tháng'},
  {value:'11_MONTH',label:'11 tháng'},
  {value:'12_MONTH',label:'12 tháng'},
  {value:'15_MONTH',label:'15 tháng'},
  {value:'18_MONTH',label:'18 tháng'},
  {value:'24_MONTH',label:'24 tháng'},
  {value:'36_MONTH',label:'36 tháng'}
]


function DangkiB2() {
  const navigate=useNavigate();
  const [selectedOptionLoaitien,setselectedOptionLoaitien]=useState("");
  const [selectedOptionLanhLai,setselectedOptionLanhLai]=useState("");
  const [selectedOptionTaiTuc,setselectedOptionTaiTuc]=useState("");
  const [selectedOptionKyHan,setselectedOptionKyHan]=useState("");
  const handleChange = (e) => {
    setselectedOptionLoaitien(e);
    console.warn(`Loai Tien:`, e);
  };
  const handleChange1 = (e) => {
    setselectedOptionLanhLai(e);
    console.log(`Phuong thuc Lanh Lai:`, e);
  };
  const handleChange2 = (e) => {
   setselectedOptionTaiTuc(e);
    console.log(`Tai Tuc:`, e);
  };
  const handleChange3 = (e) => {
    setselectedOptionKyHan(e );
     console.log(`Kỳ Hạn:`, e);
   };

  // function getCurrentDate(separator='-'){

  //   let newDate = new Date()
  //   let date = newDate.getDate();
  //   let month = newDate.getMonth() + 1;
  //   let year = newDate.getFullYear();
    
  //   return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  //   }
  //   function getCurrentDate2(separator='-'){

  //     let newDate = new Date()
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth() + 1;
  //     let year = newDate.getFullYear()+1;
      
  //     return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  //     }

  let tkkh1 = JSON.parse(localStorage.getItem('user-info'));;
  // const[sotk,setsotk]=useState("");
  const id= tkkh1.id;
  console.warn(id);
  console.warn(typeof(id));
  let tenkh= tkkh1.tenkh;
  // let ngaymoso= getCurrentDate();
  // let ngaydaohan=getCurrentDate2();
 const[ngaymoso,setngaymoso]=useState("");
  const[ngaydaohan,setngaydaohan]=useState("");
  const[magd,setmagd]=useState("");
  let loaigd = "GTK";
  const phuongthuclanhlai=selectedOptionLanhLai.value;
  
  const phuongthuctaituc =selectedOptionTaiTuc.value;
  
  const[sotiengui,setsotiengui]=useState("");
  let sotiengoc = parseFloat(sotiengui);
  const loaitiente =selectedOptionLoaitien.value;
  const makyhan =selectedOptionKyHan.value;

  async function createTKTK(){
    let dki_tktk ={id,tenkh,magd,loaigd,phuongthuctaituc,sotiengoc,loaitiente,makyhan};
    console.warn(dki_tktk);
   let result = await fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/tktk/add",{
        method:"POST",
        body:JSON.stringify(dki_tktk),
        headers:{"Content-Type":"application/json",
        "Accept":"application/json"}
    });
    result= result.json();
    localStorage.getItem("tktk");
    localStorage.setItem("tktk",JSON.stringify(result));
    navigate("/user");
    }
        return (
            <div>
                <div>
  <div className="name">Đăng ký tài khoản - Bước 2</div>
  <div className="chinhsuathongtincanhan">
    <h3 className="tieude"> Chọn kỳ hạn </h3>
    {/* <ul className="thongtin">
      <li className="mh ">Tài khoản nguồn</li>
      <li className="mh tt"><input type="text" value={sotk} onChange={(e)=>setsotk(e.target.value)}
      className="form-control" placeholder="Số tài khoản" />
        </li>
    </ul> */}
    {/* <ul className="thongtin">
      <li className="mh">Số dư khả dụng</li>
      <li className="mh tt"> 
      <input type="text" value={sotiengoc} onChange={(e)=>setsotiengoc(e.target.value)}
      className="form-control" />
      </li>
    </ul> */}
    <ul className="thongtin">
      <li className="mh">Số tiền gửi ( tối thiểu 100$)</li>
      <li className="mh tt"><input type="text" value={sotiengui} onChange={(e)=>setsotiengui(e.target.value)}
      className="form-control" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Loại tiền tệ</li>
      <li className="mh tt"> 
      {/* <select className="kỳ hạn">
          <option value="VND">VND</option>
          <option value="USD">USD</option>
        </select> */}
         <Select
        value={selectedOptionLoaitien}
        onChange={handleChange}
        options={optionLoaitien}
      />
      </li>
    </ul>
    {/* <ul className="thongtin">
      <li className="mh">Phương thức lãnh lãi</li>
      <li className="mh tt">
      {/* <select className="kỳ hạn">
          <option value="F_MONTH">Theo Tháng</option>
          <option value="F_QUARTERLY">Theo Quý</option>
          <option value="F_YEAR">Theo Năm</option>
        </select> */}
        {/* <Select
        value={selectedOptionLanhLai}
        onChange={handleChange1}
        options={optionLanhLai}
      />
      </li>
    </ul> */} 
    <ul className="thongtin">
      <li className="mh">Kỳ hạn</li>
      <li className="mh tt">
      <Select
        value={selectedOptionKyHan}
        onChange={handleChange3}
        options={optionKyHan}
      />
        {/* <select className="mh tt">
          <option value="1_MONTH">1 tháng</option>
          <option value="2_MONTH">2 tháng</option>
          <option value="3_MONTH">3 tháng</option>
          <option value="4_MONTH">4 tháng</option>
          <option value="5_MONTH">5 tháng</option>
          <option value="6_MONTH">6 tháng</option>
          <option value="7_MONTH">7 tháng</option>
          <option value="8_MONTH">8 tháng</option>
          <option value="9_MONTH">9 tháng</option>
          <option value="10_MONTH">10 tháng</option>
          <option value="11_MONTH">10 tháng</option>
          <option value="12_MONTH">12 tháng</option>
          <option value="15_MONTH">15 tháng</option>
          <option value="18_MONTH">18 tháng</option>
          <option value="24_MONTH">24 tháng</option>
          <option value="36_MONTH">36 tháng</option>
        </select> */}
      </li>
    </ul>
    {/* <ul className="thongtin">
      <li className="mh">Lãi suất</li>
      <li className="mh tt"> <input type="text" /></li>
    </ul> */}
    <ul className="thongtin">
      <li className="mh">Phương thức tái tục</li>
      <li className="mh tt">
      {/* <select className="kyhan">
          <option value="KHONG_TAI_TUC">Không tái tục</option>
          <option value="TAI_TUC_VON">Tái tục vốn</option>
          <option value="TAI_TUC_TUC">Tái tục lãi</option>
          </select> */}
           <Select
        value={selectedOptionTaiTuc}
        onChange={handleChange2}
        options={optionTaiTuc}
      />
      </li>
    </ul>
    <ul className="thongtin dongydieukhoan">
      <input type="checkbox" />Tôi đồng ý cung cấp thông tin và cho phép KPMH sử dụng thông tin theo các quy định tại Chính sách bảo mật thông tin
    </ul>
    <div className="auth-form__controls">
    <div className="btn btn-danger" style={{textAlign: 'center'}} onClick={createTKTK}>Đăng kí</div>
    </div>
  </div>
  --&gt;
  
</div>

            </div>
        );
}

export default DangkiB2;