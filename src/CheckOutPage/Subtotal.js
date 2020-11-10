import React from 'react';
import './Subtotal.css'; 
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getSubTotal } from "../reducer";

function Subtotal() {

  const [{ basket}, dispatch] = useStateValue();
  
  return (
    <div className='subTotal'>

      <CurrencyFormat
        renderText = {(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):   <strong>{`${value}`}</strong>
            </p>
            <small className='containsGift'>
              <input type='checkbox'/>This order contains a gift
            </small>
          </>

        )}
        decimalScale = {2}
        value = {getSubTotal(basket)}
        displayType = {"text"}
        thousandSeperator = {true}
        prefix = {'$'} 
      />

      <button>Proceed to Checkout</button>
      
      
    </div>
  )
}

export default Subtotal
