import React, { Component, useRef } from 'react';
import { Button } from 'reactstrap';
import PayWithPayPal from './PayWithPayPal';
import User from './User';
class Naptien extends Component {
    state = {
        total: 0.00,
        //checkoutList: [],
        isCheckout: false
    }

    // onAdd = (name, value) => {
    //     this.setState({
    //         checkoutList: [...this.state.checkoutList, { name, value }],
    //         total: this.state.total + value
    //     })
    // }
    render() {
        const { total, checkoutList, isCheckout } = this.state;
       
        if (isCheckout) {
            return (
                <PayWithPayPal
                    total={total}
                />
            )}
        return (
            // <div>
            //     <div className="home-container">
            //         <div className="brand">Laptop Store</div>
            //         <div className="checkout">
            //             <div className="checkout-total">Total: Rs. {total}/-</div>
            //             <Button
            //                 className="checkout-button"
            //                 onClick={() => {
            //                     if (total > 0) {
            //                         this.setState({ isCheckout: true })
            //                     }
            //                 }}
            //             >
            //                 Checkout {`(${checkoutList.length})`}
            //             </Button>
            //         </div>
            //     </div>
            //     {/* <Home
            //         onAdd={this.onAdd}
            //     /> */}
            //     </div>
            <div>
<div className="ls1">
  <div className="ls">Gửi tiền tiết kiệm</div>
  </div>
  <div className="info-acc">
    <div className="info-money">
      <div>Nạp tiền</div>
      <div>
        <input type="text" name="Sotien" placeholder='USD' onChange={(e)=>{this.setState({total:parseFloat(e.target.value)})}}/>
      </div>
       <form action="/pay" method="past">
      <button type="submit"  onClick={() => {
                                if (total > 0) {
                                    this.setState({ isCheckout: true })
                                }
                            }}>
        <i className="fa fa-check" aria-hidden="true" />Nạp 
      </button>
      </form>
      
    </div>
    </div>
    </div>
            
        );
    }
}

export default Naptien;