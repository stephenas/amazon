import React from 'react'
import { useStateValue } from "../StateProvider";
import './CheckOutPage.css';

function CheckOutProduct({id, title, image, rating, price}) {

  const [{}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  }

  return (
    <div className='checkOutProduct'>
      <img src={image} alt=""/>
      <div className="checkOutProductInfo">
        <p className="checkOutProductTitle">{title}</p>
        <p className="checkOutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating).fill().map(_ => (
            <p>⭐️</p>
          ))}
        </div>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
      
    </div>
  )
}

export default CheckOutProduct
