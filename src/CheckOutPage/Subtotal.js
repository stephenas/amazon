import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getSubTotal } from "../reducer";
import { useHistory } from "react-router-dom";
import numeral from "numeral";

function Subtotal() {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();

  const paymentPage = (event) => {
    event.preventDefault();
    if (!user) {
      alert("Please Sign In to proceed with payment");
      history.push("/login");
    } else {
      history.push("/payment");
    }
  };

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong>{`${numeral(value).format("0,0")}`}</strong>
            </p>
            <small className="containsGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getSubTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button onClick={paymentPage}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
