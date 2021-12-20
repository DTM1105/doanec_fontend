import React from 'react';
import {useState,useEffect} from 'react';
import Axios from 'axios';
function ThongtinCanhan (){
  
  const id="";
  const [email,setemail]=useState("");
  const [sdt, setsdt]=useState("");
  const [tenkh, settenkh]=useState("");
  const [diachi, setdiachi]=useState("");
  const [gioitinh, setgioitinh]=useState("");
  const [ngaysinh, setngaysinh]=useState("");
  const [quoctich, setquoctich]=useState("");
  const [cmnd_cccd, setcmnd_cccd]=useState("");
  const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
  let tkkh = JSON.parse(localStorage.getItem('user-info'));;
              const [khList,setkhList]=useState([]);
              let  iduser=tkkh.id;
          console.warn(tkkh);
            useEffect(()=>{
                fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/user/"+JSON.stringify(iduser))
                .then(res=>res.json())
                .then((result)=>{
                    setkhList(result.data)
                }
            )
            },[]);
            console.warn(khList);
            
            //localStorage.setItem("tktietkiem-info",tktietkiemList);
          //   const [tktkList,settktkList]=useState([]);
          //   let  iduser=tkkh.id;
          //   useEffect(()=>{
          //     fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/user/"+JSON.stringify(iduser)+"")
          //     .then(res=>res.json())
          //     .then((result)=>{
          //         settktkList(result.data)
          //     }
          // )
          // },[]);
            const handleClick=(e)=>{
              e.preventDefault();
              const user ={username,email,password,cmnd_cccd,diachi,gioitinh,ngaysinh,quoctich,sdt,tenkh};
              fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/user/update/"+JSON.stringify(iduser)+"",{
                  method:"PUT",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(user)
              }).then(()=>{
                  console.log("Edit user thanh cong!!!!");
              })
          };
           console.warn(khList)
      
        return (
          <div>
          <div>
          <div className="name">Sửa thông tin cá nhân</div>
          <div className="chinhsuathongtincanhan">
            <h3 className="tieude">Thông tin cơ bản</h3>
                <div>
            <ul className="thongtin">
              <li className="mh ">Họ và tên</li>
              <li className="mh tt"> <input defaultValue={khList.tenkh}  type="text" name="TenKH" onChange={(e)=>{settenkh(e.target.value)}} /></li>
            </ul>
            <ul className="thongtin">
              <li className="mh">Ngày tháng năm sinh</li>
              <li className="mh tt"> <input defaultValue={khList.ngaysinh} type="text" name="NgaySinh"/></li>
            </ul>
            <ul className="thongtin">
      <li className="mh">Giới tính</li>
      <li className="mh tt"> <input defaultValue={khList.gioitinh} type="text" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Số CCCD</li>
      <li className="mh tt"> <input defaultValue={khList.cmnd_cccd} type="text" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">ĐTDD</li>
      <li className="mh tt"> <input defaultValue={khList.sdt} type="text" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Email đã đăng ký Paypal</li>
      <li className="mh tt"> <input defaultValue={khList.email} type="email" /></li>
    </ul>
    <ul className="thongtin">
      <li className="mh">Quốc gia</li>
      <li className="mh tt"> <input defaultValue={khList.quoctich} type="text" /></li>
    </ul>
    <div className="auth-form__controls">
                <button className="btn btn-primary" onClick={handleClick}>Edit </button>
               </div>
                  </div>
              
          </div>
        </div>
        </div>
       );
            }

export default ThongtinCanhan;