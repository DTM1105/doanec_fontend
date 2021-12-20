import React from 'react';
import {useState,useEffect} from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const optionThang=[
    {value:'1',label:'Tháng 1'},
    {value:'2',label:'Tháng 2'},
    {value:'3',label:'Tháng 3'},
    {value:'4',label:'Tháng 4'},
    {value:'5',label:'Tháng 5'},
    {value:'6',label:'Tháng 6'},
    {value:'7',label:'Tháng 7'},
    {value:'8',label:'Tháng 8'},
    {value:'9',label:'Tháng 9'},
    {value:'10',label:'Tháng 10'},
    {value:'11',label:'Tháng 11'},
    {value:'12',label:'Tháng 12'}
  ]
function Thongketheothang(props) {
    const [selectedoptionThang,setselectedoptionThang]=useState("");
    const [nam,setnam]=useState("");

    const handleChange = (e) => {
        setselectedoptionThang(e);
        console.warn(`Tháng:`, e);
    }
    const thang =selectedoptionThang.value;
    console.warn(thang);
    console.warn(nam);
    const [thongketien,setthongketien]=useState("");
        async function thongke(){
           // let dki_tktk ={sotien};
           fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/thongketheothang/"+thang+"/"+nam).then(res=>res.json())
           .then((result)=>{
               setthongketien(result)
               console.warn(result);
           })
        }
    return (
        <div>
        <div>
<div className="name">Thống kê theo tháng</div>
<div className="chinhsuathongtincanhan">
<ul className="thongtin">
<li className="mh">Tháng</li>
<li className="mh tt"> 
 <Select
value={selectedoptionThang}
onChange={handleChange}
options={optionThang}
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

export default Thongketheothang;