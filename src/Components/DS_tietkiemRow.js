import React from 'react';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function DS_tietkiemRow(props) {
    const navigate = useNavigate();
    const {edituser2}=props;
   const {stt}=props;
   const{sotk}=props;
   
  const {id}=props;
  const {tenkh}=props;
  const{ngaymoso} =props;
   const {ngaydaohan}=props;
   const{pttt} =props;
   const {sodu} =props;
   const {loaitien} =props;
   const {makyhan} =props;
   console.warn(stt);
   let edituser3=()=>{
    edituser2();
    navigate("/");
   }
    return (
            <tr onClick={edituser3}>
          <td>{stt+1}</td>
          <td>{sotk}</td>
          <td>{id}</td>
          <td>{tenkh}</td>
          <td>{ngaymoso}</td>
          <td>{ngaydaohan}</td>
          <td>{pttt}</td>
          <td>{sodu}</td>
          <td>{loaitien}</td>
          <td>{makyhan}</td>
          </tr>
    );
}

export default DS_tietkiemRow;