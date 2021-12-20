import React from 'react';
import { useNavigate } from 'react-router-dom';
function DS_thanhtoan(props) {
    const navigate = useNavigate();
    const {stt}=props;
    const {sotk}=props;
    const {id}=props;
    const {sodudauki}=props;
    const {soducuoiky}=props;
    const {sotien}=props;
    const {loaitiente}=props;
    return (
        <tr>
        <td>{stt+1}</td>
        <td>{sotk}</td>
        <td>{id}</td>
        <td>{sodudauki}</td>
        <td>{soducuoiky}</td>
        <td>{sotien}</td>
        <td>{loaitiente}</td>
        </tr>
    );
}

export default DS_thanhtoan;