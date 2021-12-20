import React from 'react';
import {useState,useEffect} from 'react';
import List_tkthanhtoanRow from './List_tkthanhtoanRow';
function List_tkthanhtoan(props) {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const id = user.id;
    const [tkList,settkList]=useState([]);
    useEffect(()=>{
        fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/tktt/"+JSON.stringify(id))
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
       ( < List_tkthanhtoanRow  stt={key} sotk={tktietkiem.sotk} id={tktietkiem.id} tenkh={tktietkiem.tenkh} sodudauki={tktietkiem.sodudauky}  soducuoiky={tktietkiem.soducuoiky} sotien={tktietkiem.sotien} loaitiente={tktietkiem.loaitiente}/>))
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

export default List_tkthanhtoan;