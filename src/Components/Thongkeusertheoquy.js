import React from 'react';
import {useState,useEffect} from 'react';
import Select from 'react-select';
import DS_newusertheoquy from './DS_newusertheoquy';
const optionQuy=[
{value:'1',label:'Quý 1'},
{value:'2',label:'Quý 2'},
{value:'3',label:'Quý 3'},
{value:'4',label:'Quý 4'}
]
function Thongkeusertheoquy(props) {
    const [tkList,settkList]=useState([]);
    const [selectedoptionQuy,setselectedoptionQuy]=useState("");
    const [nam,setnam]=useState("");
    const [check,setcheck]=useState(false);
    const handleChange = (e) => {
        setselectedoptionQuy(e);
        console.warn(`Quý:`, e);
    }
    const quy =selectedoptionQuy.value;
    console.warn(quy);
    console.warn(nam);
    async function thongke(){
        setcheck(!check);
        fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/newusertheoquy/"+quy+"/"+nam).then(res=>res.json())
        .then((result)=>{
            console.warn(result);
            settkList(result)
        })
     }
     let  mappingTableUser=()=> tkList.map((tktietkiem,key)=>
     ( <DS_newusertheoquy  stt={key} sotk={tktietkiem.sotk} id={tktietkiem.id} tenkh={tktietkiem.tenkh} ngaymoso={tktietkiem.ngaymoso}  sotiengoc={tktietkiem.sotiengoc}/>))
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

export default Thongkeusertheoquy;