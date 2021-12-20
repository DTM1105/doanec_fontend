import React from 'react';
import {useState,useEffect} from 'react';
import TableDataRow from './TableDataRow';
function User(props)
   {
    const {  total } = props;
    const {paidFor}=props;
  const[sotk,setsotk]=useState([]);
  const[id,setid]=useState("");
  const[tenkh,settenkh]=useState("");
  const[ngaymoso,setngaymoso]=useState("");
  const[ngaydaohan,setngaydaohan]=useState([]);
  const[magd,setmagd]=useState("");
  const[loaigd,setloaigd]=useState("");
  const[phuongthuclanhlai,setphuongthuclanhlai]=useState("");
  const[phuongthuctaituc,setphuongthuctaituc]=useState("");
  const [sodu,setsodu]=useState([]);
  const [stt,setstt]=useState([]);
  let sotiengoc = total;
  const[loaitiente,setloaitiente]=useState("");
  const[makyhan,setmakyhan]=useState("");
  
            let tkkh = JSON.parse(localStorage.getItem('user-info'));;
              var [khList,setkhList]=useState([{value:'',label:''}]);
              const [khList1,setkhList1]=useState([]);
              let  iduser=tkkh.id;
          console.warn(tkkh);
            useEffect(()=>{
                fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/getAll/"+JSON.stringify(iduser))
                .then(res=>res.json())
                .then((result)=>{
                  setkhList1(result);
                    result.map((tktietkiem,key)=>{
                      localStorage.setItem("tktk-info"+JSON.stringify(key)+"", JSON.stringify(tktietkiem));
                      setkhList({value:tktietkiem.sotk,label:tktietkiem.sotk});
                      
                    })
                   
                    // result.map((tktietkiem,key)=>{
                    //   optionSotk[key]=[JSON.stringify(tktietkiem.sotk)]
                    // })
                    // khList.map((tktkinfo)=>(
                    //   localStorage.setItem("tktk-info",JSON.stringify(tktkinfo))
                    // ));
                }
            )
            },[]);
            
      
            console.warn(khList1);
            var listsotk=khList1.map((e)=>
            ({value:e,label:e.sotk}))

           // console.warn(optionSotk);
            
            // console.warn(khList);
            // console.warn(typeof(khList[0]))
            // khList.map((tktkinfo)=>(
            //   localStorage.setItem("tktk-info",JSON.stringify(tktkinfo))
           // ));
          //  const optionSotk=[
          //   {value:'VND',label:'VND'},
          //   {value:'USE',label:'USD'}
          // ]

          // const [selectedoptionSotk,setselectedoptionSotk]=useState("");
          // const handleChange = (e) => {
          //   setselectedoptionSotk(e);
          //   localStorage.setItem("tktk-info", JSON.stringify(e.value));
          //   console.warn(`Loai Tien:`, e.value);
          // };
        //   let info=JSON.parse(localStorage.getItem('tktk-info'));
        //  let tktk = JSON.parse(localStorage.getItem('tktk-info0'));;

        let edituser=(user)=>{
          console.log('da ket noi');
          localStorage.setItem("tktk-info", JSON.stringify(user));
          console.log(user);
        }
         let  mappingTableUser=()=> khList1.map((tktietkiem,key)=>
           ( <TableDataRow edituser2={(user)=>edituser(tktietkiem)}  stt={key} sotk={tktietkiem.sotk} sodu={tktietkiem.sotiengoc} loaitien={tktietkiem.loaitiente} ngaydaohan={tktietkiem.ngaydaohan}/>))
        return (
          <div className="col">
          <table className="table table-striped table-hover">
            <thead className="thead-inverse">
              <tr>
                <th>STT</th>
                <th>Số tài khoản tiết kiệm</th>
                <th>Số tiền gửi hiện tại</th>
                <th>Loại tiền</th>
                <th>Ngày đáo hạn</th>
              </tr>
            </thead>
            
           <tbody>
           {mappingTableUser()}
                </tbody>
          </table>
        </div>
        );
}
export default User;