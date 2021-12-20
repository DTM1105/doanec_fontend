import React from 'react';
import {useState,useEffect} from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import  DS_newusertheothang from './DS_newusertheothang';
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

function Thongkeusertheothang(props) {
    const [tkList,settkList]=useState([]);
    const [selectedoptionThang,setselectedoptionThang]=useState("");
    const [nam,setnam]=useState("");
    const [check,setcheck]=useState(false);
    const handleChange = (e) => {
        setselectedoptionThang(e);
        console.warn(`Tháng:`, e);
    }
    const thang =selectedoptionThang.value;
    console.warn(thang);
    console.warn(nam);
    async function thongke(){
        setcheck(!check);
        fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/newuser/"+thang+"/"+nam).then(res=>res.json())
        .then((result)=>{
            console.warn(result);
            settkList(result)
        })
     }
     let  mappingTableUser=()=> tkList.map((tktietkiem,key)=>
     ( <DS_newusertheothang  stt={key} sotk={tktietkiem.sotk} id={tktietkiem.id} tenkh={tktietkiem.tenkh} ngaymoso={tktietkiem.ngaymoso}  sotiengoc={tktietkiem.sotiengoc}/>))
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
<div className="auth-form__controls">
<div className="btn btn-danger" style={{textAlign: 'center'}} onClick={thongke}>Thống kê</div>
</div>
{check === true ?
 <div className="col">
 <table className="table table-striped table-hover">
   <thead className="thead-inverse">
     <tr>
       <th>STT</th>
       <th>Số tài khoản</th>
       <th>Mã khách hàng</th>
       <th>Tên khách hàng</th>
       <th>Ngày mở sổ</th>
       <th>Số tiền gốc</th>
     </tr>
   </thead>
   
  <tbody>
  {mappingTableUser()}
       </tbody>
 </table>
</div>
:null}
</div>
--&gt;

</div>

    </div>
    );
}

export default Thongkeusertheothang;