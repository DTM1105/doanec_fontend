import React,{useState,useEffect,useRef} from 'react';
import User from './User';
import { useNavigate } from 'react-router-dom';

function PayWithPayPal(props) {
    const navigate = useNavigate();
    const {  total } = props;
    const [paidFor, setpaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    let tktk = JSON.parse(localStorage.getItem('tktk-info'));;
    const sotk=tktk.sotk;
    const sotienbandau = tktk.sotiengoc;
  const id =tktk.id;
  const tenkh=tktk.tenkh;
  const ngaymoso = tktk.ngaymoso
  const ngaydaohan=tktk.ngaydaohan;
  const magd = tktk.magd;
  const loaigd = tktk.loaigd;
  const phuongthuclanhlai=tktk.phuongthuclanhlai;
  const phuongthuctaituc=tktk.phuongthuctaituc;
  let sotiengoc = total+ sotienbandau;
  const loaitiente=tktk.loaitiente;
  const makyhan=tktk.makyhan;
  
    const user={sotk,id,tenkh,ngaymoso,ngaydaohan,magd,loaigd,phuongthuclanhlai,
    phuongthuctaituc,sotiengoc,loaitiente,makyhan};
    
    console.warn(total);
    console.warn(typeof(total));
    console.warn(sotiengoc);
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: 'Khach hang nap tien',
                            amount: {
                                currency_code: 'USD',
                                value: total,
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                   const order = await actions.order.capture();
                  setpaidFor(true);
                   console.log('ORDER', order);
                   
                },
                onError: err => {
                    setError(err);
                    console.error('ERROR', err);
                },
            })
            .render(paypalRef.current);
    }, []);
    if(paidFor) {
        return (
            
            // <User total={total} paidFor={paidFor}/>
            fetch("http://webec1-env.eba-mppppyr4.ap-southeast-1.elasticbeanstalk.com/api/auth/tktk/update/"+sotk+"",{
                  method:"PUT",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(user)
              }).then(()=>{
                  console.log("Edit user thanh cong!!!!");
                  navigate("/user");
              })
        )
    }
    if (error) {
        return (
            <div>
                Error in processing order. Please Retry again
            </div>
        )
    }
  
   
    console.warn(typeof(total));
    return (
        <div>
        <div className="ls1">
  <div className="ls">Gửi tiền tiết kiệm</div>
  </div>
  <div className="info-acc1">
    <div>
            <div className="info-money">
            <ul>
        <li>Số tiền gửi:{total}</li>
      </ul>
      </div>
            <div ref={paypalRef} />
        </div>
    </div>
    </div>
        
    )
}

export default PayWithPayPal;