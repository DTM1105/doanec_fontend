import React from 'react';
import {useState,useEffect} from 'react';
import Select from 'react-select';
const optionQuy=[
{value:'1',label:'Quý 1'},
{value:'2',label:'Quý 2'},
{value:'3',label:'Quý 3'},
{value:'4',label:'Quý 4'}
]
function Thongketheoquy(props) {
    const [selectedoptionQuy,setselectedoptionQuy]=useState("");
    const [nam,setnam]=useState("");

    const handleChange = (e) => {
        setselectedoptionQuy(e);
        console.warn(`Quý:`, e);
    }
    const quy =selectedoptionQuy.value;
    console.warn(quy);
    console.warn(nam);
    const [thongketien,setthongketien]=useState("");
        async function thongke(){
           // let dki_tktk ={sotien};
           fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/thongketheoquy/"+quy+"/"+nam).then(res=>res.json())
           .then((result)=>{
               setthongketien(result)
               console.warn(result);
           })}
    return (
        <div>
        <div>
<div className="name">Thống kê theo Quý</div>
<div className="chinhsuathongtincanhan">
<ul className="thongtin">
<li className="mh">Quý</li>
<li className="mh tt"> 
 <Select
value={selectedoptionQuy}
onChange={handleChange}
options={optionQuy}
/>
</li>
</ul>
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

export default Thongketheoquy;