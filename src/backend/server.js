const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HqCVFFmH5npfTZWV6mfSEPzIsr2eOPxP5xaG4GGH05wliEgXOhRhSgz2TmOZPKnv15dAUMUwSuHdXJTAQzGYhj6005o5Fymx8"
);

//API

//App config
const app = express();
const port = process.env.PORT || 9000;

//Middlewares
app.use(express.json());
app.use(cors({ origin: true }));

//API routes
app.get("/", (req, res) => res.status(200).send("Here we go!!!"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log(
    "Payment request received BOOM!!!!!!! for this amount >>>> ",
    total
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  console.log("Payment intend - ", paymentIntent);

  // status(201) says "Okay"
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
    status: paymentIntent.status,
  });
});

//Listen
app.listen(port, () => console.log(`App listening to ${port}`));
