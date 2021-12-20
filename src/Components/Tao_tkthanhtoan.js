import React from 'react';
import {useState,useEffect} from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
const optionLoaitien=[
    {value:'VND',label:'VND'},
    {value:'USD',label:'USD'}
  ]
function Tao_tkthanhtoan() {
    const [selectedOptionLoaitien,setselectedOptionLoaitien]=useState("");
    const handleChange = (e) => {
        setselectedOptionLoaitien(e);
        console.warn(`Loai Tien:`, e);
      };
    const navigate=useNavigate();
    let tkkh1 = JSON.parse(localStorage.getItem('user-info'));;
    const id= tkkh1.id;
    let tkkh = JSON.parse(localStorage.getItem('tktk-info0'));;
    let tenkh= tkkh.tenkh;
    let sodudauky = 0;
    let soducuoiky=parseFloat(0);
    console.warn(sodudauky);
    console.warn(typeof(sodudauky));
    const loaitiente =selectedOptionLoaitien.value;
    async function createTKthanhtoan(){
        let dki_tktk ={id,loaitiente,soducuoiky,sodudauky,tenkh};
        console.warn(dki_tktk);
       let result = await fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/tktt/add",{
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
  <div className="name">Tạo tài khoản thanh toán</div>
  <div className="chinhsuathongtincanhan">
    <ul className="thongtin">
      <li className="mh">Loại tiền tệ</li>
      <li className="mh tt"> 
         <Select
        value={selectedOptionLoaitien}
        onChange={handleChange}
        options={optionLoaitien}
      />
      </li>
    </ul>
    <div className="auth-form__controls">
    <div className="btn btn-danger" style={{textAlign: 'center'}} onClick={createTKthanhtoan}>Tạo</div>
    </div>
  </div>
  --&gt;
  
</div>

    );
}

export default Tao_tkthanhtoan;