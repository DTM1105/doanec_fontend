import React from 'react';

function DS_newusertheonam(props) {
    const {stt}=props;
    const {sotk}=props;
    const {id}=props;
    const {tenkh}=props;
    const {ngaymoso}=props;
    const {sotiengoc}=props;
    return (
        <tr>
        <td>{stt+1}</td>
        <td>{sotk}</td>
        <td>{id}</td>
        <td>{tenkh}</td>
        <td>{ngaymoso}</td>
        <td>{sotiengoc}</td>
        </tr>
    );
}

export default DS_newusertheonam;