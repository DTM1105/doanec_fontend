import React from 'react';
import {useState,useEffect} from 'react';
import DS_tietkiemRow from './DS_tietkiemRow'
function Ad_DS_tktietkiem() {
   // let user = JSON.parse(localStorage.getItem('user-info'));;
    const [tktkList,settktkList]=useState([]);
  useEffect(()=>{
      fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/tktk")
      .then(res=>res.json())
      .then((result)=>{
          settktkList(result)
      }

  )
  },[]);
  console.warn(tktkList);
  let edituser=(user)=>{
    console.log('da ket noi');
   // localStorage.setItem("tktk-info", JSON.stringify(user));
    console.log(user);
  }
   let  mappingTableUser=()=> tktkList.map((tktietkiem,key)=>
     ( <DS_tietkiemRow edituser2={(user)=>edituser(tktietkiem)}  stt={key} sotk={tktietkiem.sotk} id={tktietkiem.id} ngaymoso={tktietkiem.ngaymoso} ngaydaohan={tktietkiem.ngaydaohan} pttt={tktietkiem.phuongthuctaituc} sodu={tktietkiem.sotiengoc} loaitien={tktietkiem.loaitiente} makyhan={tktietkiem.makyhan}/>))
  
    return (
        <div className="col">
          <table className="table table-striped table-hover">
            <thead className="thead-inverse">
              <tr>
                <th>STT</th>
                <th>Số tài khoản tiết kiệm</th>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Ngày mở sổ</th>
                <th>Ngày đáo hạn</th>
                <th>Phương thức tái tục</th>
                <th>Số tiền mở sổ</th>
                <th>Loại tiền</th>
                <th>Mã kỳ hạn</th>
              </tr>
            </thead>
            
           <tbody>
           {mappingTableUser()}
                </tbody>
          </table>
        </div>
    );
}

export default Ad_DS_tktietkiem;