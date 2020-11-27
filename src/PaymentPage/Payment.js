import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from "../CheckOutPage/CheckOutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getSubTotal } from "../reducer";
import axios from "../axios";
import { db } from "../firebase";
import numeral from "numeral";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const history = useHistory();

  useEffect(() => {
    //secret stripe which allows us to change a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripes expects the total in a currency subunits
        url: `/payment/create?total=${getSubTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log("Responsedata = ", response.data);
    };
    getClientSecret();
  }, [basket]);

  console.log(" The secret is >>>>> ", clientSecret);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.

    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIndent = payment cpnfimation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });

        history.replace("/orders");
      });
    console.log("payload >>> ", payload);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError();
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h2>Delivery Address</h2>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123, XXXXXXXXXXX</p>
            <p>abc, XXXXXXXXXX</p>
          </div>
        </div>
        <div className="payment__section payment__review">
          <div className="payment__title payment__reviewTitle">
            <h2>Review items and delivery</h2>
          </div>
          <div className="payment__items payment__itemsReview">
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h2>Payment Method</h2>
          </div>
          <div className="payment__details">
            {/* Stripe function */}
            <form onSubmit={handleSubmit}>
              <CardElement
                onChange={handleChange}
                options={CARD_ELEMENT_OPTIONS}
              />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3 className="payment__total">
                      Order Total: {numeral(value).format("0,0")}
                    </h3>
                  )}
                  decimalScale={2}
                  value={getSubTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button
                  className="payment__buy"
                  onClick={handleSubmit}
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{`Error is - ${error}`}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
