import React, { useState,useEffect } from 'react';
import PayWithPayPal from './PayWithPayPal';
import Select from 'react-select';
import { Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function RutTien() {
//   state = {
//     total: 0.00,
//     isCheckout: false
// }
// const { total, checkoutList, isCheckout } = this.state;
// let tktk = JSON.parse(localStorage.getItem('tktk-info'));;
//       const sotk=tktk.sotk;
//       const sotienbandau = tktk.sotiengoc;
//         if (isCheckout) {
//             return (
//                 <PayWithPayPal
//                     total={total}
//                 />
//             )}
      const navigate = useNavigate();
      const [total,settotal]=useState("");
      const [isCheckout,setisCheckout]=useState(false);
      let tkkh = JSON.parse(localStorage.getItem('user-info'));;
      let  iduser=tkkh.id;
      const [khList1,setkhList1]=useState([]);
      useEffect(()=>{
        fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/getAlltkthanhtoan/"+JSON.stringify(iduser))
        .then(res=>res.json())
        .then((result)=>{
            result.map((tktietkiem,key)=>{
              setkhList1(result);
              localStorage.setItem("tkthanhtoan-info"+JSON.stringify(key)+"", JSON.stringify(tktietkiem));      
            })
        }
    )
    },[]);
    console.warn(khList1);
            var listsotk=khList1.map((e)=>
            ({value:e,label:e.sotk}));
             const [selectedoptionSotk,setselectedoptionSotk]=useState("");
          const handleChange = (e) => {
            setselectedoptionSotk(e);
            localStorage.setItem("tkthanhtoan", JSON.stringify(e.value));
          };
          function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    let ngayruttien=getCurrentDate();
    console.warn(ngayruttien);
    let tktk = JSON.parse(localStorage.getItem("tktk-info"));
            let stk=tktk.sotk;
            let ngaydaohan = tktk.ngaydaohan;
            let pttt= tktk.phuongthuctaituc;
            console.warn(ngaydaohan);
            console.warn(typeof(ngaydaohan));
            console.warn(pttt);
            if(ngaydaohan == ngayruttien)
            {
              console.warn("bangnhau")
            }
            else{
              console.warn("khong bangnhau")
            }
            // if(pttt=="TAI_TUC_VON_LAN_LAI")
            // {console.warn("taituc bangnhau")}
            
          async function ruttiendunghan(){
            
            let tk_thanhtoan = JSON.parse(localStorage.getItem("tkthanhtoan"));
            let sotk_thanhtoan=tk_thanhtoan.sotk;
            if(ngaydaohan == ngayruttien)
            {
              if(pttt == "KHONG_TAI_TUC")
              {
                fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/rutdunghan/"+JSON.stringify(stk)+"/"+JSON.stringify(sotk_thanhtoan)+"");
              navigate('/');
              console.warn("Rut tien dung han khong tai tuc");
              window.location.reload();
              }
              if(pttt=="TAI_TUC_VON")
              {
                fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/taitucvon/"+JSON.stringify(stk)+"/"+JSON.stringify(sotk_thanhtoan)+"");
              navigate('/');
              console.warn("Rut tien dung han tai tuc von");
              window.location.reload();
              }
              if(pttt=="TAI_TUC_VON_LAN_LAI")
              {
                fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/taitucvonlanlai/"+JSON.stringify(stk)+"/"+JSON.stringify(sotk_thanhtoan)+"");
                navigate('/');
                console.warn("Rut tien dung han tai tuc von lẫn lãi");
                window.location.reload();
              }
            }
            else{
              fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/ruttruochan/"+JSON.stringify(stk)+"/"+JSON.stringify(sotk_thanhtoan)+"");
              navigate('/');
              console.warn("khong bang nhau");
              window.location.reload();
            }
            }
        return ( <div>
          <div className="ls1">
            <div className="ls">Rút tiền về tài khoản</div>
            </div>
            <div className="info-acc">
              <div className="info-money">
                <div>Chọn tài khoản thanh toán</div>
                <div>
                  <Select
        value={selectedoptionSotk}
        onChange={handleChange}
        options={listsotk}
      />
                </div>
                 <form action="/pay" method="past">
                <button type="submit" onClick={ruttiendunghan}>
                  <i className="fa fa-check" aria-hidden="true" />Rút 
                </button>
                </form>
                
              </div>
              </div>
              </div>
        );
}

export default RutTien;