import { cart } from "../../Script/cart.js";
import { getProduct } from "../../Script/Products_data.js";
import { deliveryOptions, getDeliveryOption } from "../deliveryOptions.js";
import { formatCurrency } from "../Utils/money.js";

export function renterPaymentSummary(){

  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.pricecent * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
    shippingPriceCents += deliveryOption.pricecent;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1; //calculate 10%
  const totalCents = totalBeforeTaxCents + taxCents;

  let cartQty = 0;

  cart.forEach((cartItem) => {
    cartQty += cartItem.quantity;
  });
  
  const paymentSummaryHTML = `
    <div class="Payment_summary_title">Order Summary</div>

    <div class="payment_summary_row">
      <div>Item (${cartQty}):</div>
      <div class="payment_item_amount">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment_summary_row">
      <div>Shipping &amp; handling:</div>
      <div class="payment_item_amount">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment_summary_row subtotal_row">
      <div>Total before tax:</div>
      <div class="payment_item_amount">$${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment_summary_row">
      <div>Estimated tax (10%):</div>
      <div class="payment_item_amount">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment_summary_row total_row">
      <div>Order total:</div>
      <div class="payment_item_amount">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place_order_btn button_primary">
      Place your order
    </button>`;

    document.querySelector(".js_payment_summary").innerHTML = paymentSummaryHTML;
}


