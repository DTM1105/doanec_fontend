import React from 'react';
import {useState,useEffect} from 'react';
import DS_taikhoanRow from './DS_taikhoanRow';
function Ad_DS_tk(props) {
    const [tkList,settkList]=useState([]);
  useEffect(()=>{
      fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/user")
      .then(res=>res.json())
      .then((result)=>{
          settkList(result)
      }

  )
  },[]);
  console.warn(tkList);
  // let edituser=(user)=>{
  //   console.log('da ket noi');
  // //  localStorage.setItem("tktk-info", JSON.stringify(user));
  //   console.log(user);
  // }
   let  mappingTableUser=()=> tkList.map((tktietkiem,key)=>
     ( <DS_taikhoanRow   stt={key} sotk={tktietkiem.username} email={tktietkiem.email} per={tktietkiem.role} tenkh={tktietkiem.tenkh} cmnd_cccd={tktietkiem.cmnd_cccd} gioitinh={tktietkiem.gioitinh} ngaysinh={tktietkiem.ngaysinh} diachi={tktietkiem.diachi} sdt={tktietkiem.sdt} quoctich={tktietkiem.quoctich}/>))
    return (
        <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>username</th>
              <th>Email</th>
              <th>Quyền</th>
              <th>Tên Khách Hàng</th>
              <th>CMND/CCCD</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>SĐT</th>
              <th>Quốc tịch</th>
            </tr>
          </thead>
          
         <tbody>
         {mappingTableUser()}
              </tbody>
        </table>
      </div>
    );
}

export default Ad_DS_tk;