import React from 'react';
import { useNavigate } from 'react-router-dom';
function DS_taikhoanRow(props) {
    const navigate = useNavigate();
    const {stt}=props;
    const {username}=props;
    const {email}=props;
    const {per}=props;
    const {tenkh}=props;
    const {cmnd_cccd}=props;
    const {gioitinh}=props;
    const {ngaysinh}=props;
    const {diachi}=props;
    const {sdt}=props;
    const {quoctich}=props;
    return (
        <tr>
        <td>{stt+1}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{per}</td>
        <td>{tenkh}</td>
        <td>{cmnd_cccd}</td>
        <td>{gioitinh}</td>
        <td>{ngaysinh}</td>
        <td>{diachi}</td>
        <td>{sdt}</td>
        <td>{quoctich}</td>
        </tr>
    );
}

export default DS_taikhoanRow;