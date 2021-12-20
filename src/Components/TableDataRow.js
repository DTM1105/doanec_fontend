import React from 'react';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function TableDataRow(props) {
    const [selectsotk,setselectsotk]=useState("");
    const navigate = useNavigate();
    const {edituser2}=props;
   const {stt}=props;
   const{sotk}=props;
   const{sodu}=props;
   const {loaitien}=props;
   const{ngaydaohan}=props;
   console.warn(stt);
//    const handleChange = (e) => {
//     //localStorage.setItem("tktk-info", localStorage.getItem("tktk-info"+JSON.stringify(e)+""));
//   };
// function select(){
//     let info=JSON.parse(localStorage.getItem("tktk-info"+JSON.stringify(selectsotk)+""));
//     console.warn(info);
// localStorage.setItem("tktk-info", JSON.stringify(info));
//     navigate("/")
// }
let edituser3=()=>{
    edituser2();
    navigate("/tktietkiem_detail");
//     let info=JSON.parse(localStorage.getItem("tktk-info"+JSON.stringify(selectsotk)+""));
//     console.warn(info);
// localStorage.setItem("tktk-info", JSON.stringify(info));
  }
console.warn(selectsotk);
    return (
        <tr onClick={edituser3}>
          <td>{stt+1}</td>
          <td>{sotk}</td>
          <td>{sodu}</td>
          <td>{loaitien}</td>
          <td>{ngaydaohan}</td>
          </tr>
    );
}
{/* <Select
        value={selectedoptionSotk}
        onChange={handleChange}
        options={listsotk}
      /> */}
export default TableDataRow;