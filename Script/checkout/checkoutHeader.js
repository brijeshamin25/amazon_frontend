import { cart } from "../../Script/cart.js";

export function renderCheckoutHeader(){

  let cartQty = 0;

  cart.forEach((cartItem) => {
    cartQty += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
    <div class="header_div">
    <div class="checkout_header_left">
      <a href="amazon.html">
        <img class="amazon_logo" src="images/amazon-logo.png" alt="logo" />
      </a>
    </div>

    <div class="checkout_header_middle">
      Checkout (<a class="return_to_home js_retrun_to_home" href="amazon.html"></a>)
    </div>

    <div class="checkout_header_right">
      <img src="images/icons/checkout-lock-icon.png" alt="lock_icon" />
    </div>
    </div>`;

  document.querySelector(".js_checkout_header").innerHTML = checkoutHeaderHTML;
}