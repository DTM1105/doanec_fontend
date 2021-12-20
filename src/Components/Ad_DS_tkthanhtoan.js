import React from 'react';
import {useState,useEffect} from 'react';
import DS_thanhtoan from './DS_thanhtoan';
function Ad_DS_tkthanhtoan(props) {
    const [tkList,settkList]=useState([]);
  useEffect(()=>{
      fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/tktt")
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
     ( < DS_thanhtoan  stt={key} sotk={tktietkiem.sotk} id={tktietkiem.id} tenkh={tktietkiem.tenkh} sodudauki={tktietkiem.sodudauky}  soducuoiky={tktietkiem.soducuoiky} sotien={tktietkiem.sotien} loaitiente={tktietkiem.loaitiente}/>))
    return (
        <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Số tài khoản</th>
              <th>Mã khách hàng</th>
              <th>Số dư đầu kỳ</th>
              <th>Số dư cuối kỳ</th>
              <th>Số tiền </th>
              <th>Loại tiền tệ</th>
            </tr>
          </thead>
          
         <tbody>
         {mappingTableUser()}
              </tbody>
        </table>
      </div>
    );
}

export default Ad_DS_tkthanhtoan;