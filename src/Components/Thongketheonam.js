import React from 'react';
import {useState,useEffect} from 'react';
function Thongketheonam(props) {
    const [nam,setnam]=useState("");
    const [thongketien,setthongketien]=useState("");
        async function thongke(){
           // let dki_tktk ={sotien};
           fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/thongketheothang/"+nam).then(res=>res.json())
           .then((result)=>{
               setthongketien(result)
               console.warn(result);
           })}
    return (
        <div>
        <div>
<div className="name">Thống kê theo Năm</div>
<div className="chinhsuathongtincanhan">
<ul className="thongtin">
<li className="mh">Năm</li>
<li className="mh tt"><input type="text" value={nam} onChange={(e)=>setnam(e.target.value)}
className="form-control" /></li>
</ul>
<ul className="thongtin">
<li className="mh">Số tiền:</li>
<li className="mh tt"><input type="text" value={thongketien}
className="form-control" /></li>
</ul>
<div className="auth-form__controls">
<div className="btn btn-danger" style={{textAlign: 'center'}} onClick={thongke}>Thống kê</div>
</div>
</div>
--&gt;

</div>

    </div>
    );
}

export default Thongketheonam;