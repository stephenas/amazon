import React from "react";
import "./Order.css";
import moment from "moment";
import CheckOutProduct from "../CheckOutPage/CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import numeral from "numeral";

function Order({ order }) {
  return (
    <div className="order">
      <h4>Order placed on</h4>
      <p className="order__date">
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order__id">
        <h5>Order ID : {order.id}</h5>
      </p>
      {console.log("Order data >>>> ", order.basket)}
      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          rating={item.rating}
          price={item.price}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">
              Order Total: {numeral(value).format("0,0")}
            </h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
