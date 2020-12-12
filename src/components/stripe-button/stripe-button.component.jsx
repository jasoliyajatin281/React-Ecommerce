import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceFoeStripe = price * 100;
  const publishablekey =
    "pk_test_51HxEBFH6JQ0svzDVr0nxEpFY8G7rl0VOCalTPmxxJg12PaYpmVOEN7jLKNlA5MTNbiWvxAlZJxrpMNoiQo5TjcFD00z4tdOjBC";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sai Fashion Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your totle is $${price}`}
      amount={priceFoeStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
