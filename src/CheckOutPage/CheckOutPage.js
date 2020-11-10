import React from 'react'
import './CheckOutPage.css'
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from './Subtotal';


function CheckOutPage() {

  const [{basket}] = useStateValue();

  return (
    <div className='checkOut'>
      <div className="checkOutLeft">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/bank_stripe_pc_day-of_Phase1.jpg" alt="" className="ad"/>

        {(basket?.length === 0) ? (
        <div className='checkOutTitle'>
          <h1>Your Shopping Cart is empty</h1>
          <p>You have no items in your basket. To buy one or more, click "Add to basket" next to the item.</p>
        </div>
        ) : (
        <div>
          <h1 className='checkOutTitle'>Your Shopping Cart</h1>
          {basket?.map(item => (
          <CheckOutProduct 
          id = {item.id}
          title = {item.title}
          image = {item.image}
          rating = {item.rating}
          price = {item.price} />
         ))}
        </div>
        )}
      </div>
      
      <div className="checkOutRight">
        <Subtotal/>
      </div>
      
      
    </div>

    
  );
}

export default CheckOutPage;
