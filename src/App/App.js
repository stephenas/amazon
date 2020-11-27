import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../HomePage/Header/Header";
import HomePage from "../HomePage/HomePage";
import CheckOutPage from "../CheckOutPage/CheckOutPage";
import LoginPage from "../LoginPage/LoginPage";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Payment from "../PaymentPage/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "../OrdersPage/Orders";
import Footer from "../FooterPage/Footer";

const promise = loadStripe(
  "pk_test_51HqCVFFmH5npfTZWvSEkkBBSVjNXePGMdFKFCOUBkh2PmqV0bbnc0nB40dCObHNTGAg615hIvD1OQKcKYCBY3OPs00usEKfOBm"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("user is - ", user);
  const truncate = (email, n = 6) => {
    const index = email?.indexOf("@");
    return email?.substr(0, index);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOutPage username={truncate(user?.email)} />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          {/* This is default */}
          <Route path="/">
            <Header />
            <HomePage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
