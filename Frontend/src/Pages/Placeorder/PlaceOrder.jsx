// import React from 'react'
import { useContext } from 'react'
import './PlaceOrder.css'
const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreCOntext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
         <p className="title">Delivery Information</p>
         <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
         </div>
         <input type="email" placeholder='Email address'/>
         <input type="text"  placeholder='street'/>
         <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
         </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
         </div>
         <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>cart totals</h2>
          <div>
            <div className="cart-total-deatils">
             <p>Subtotal</p>
             <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-deatils">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
             <hr />
            <div className="cart-total-deatils">
            <b>Total</b>
            <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
