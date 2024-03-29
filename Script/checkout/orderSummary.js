import {cart,removeFromCart,calculateCartQty,updateQuantity,updateDeliveryOption} from '../../Script/cart.js'; //Named Export {} With
import { products, getProduct} from '../../Script/Products_data.js';
import { formatCurrency } from '../Utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';//Default Export {} Without
import {deliveryOptions, getDeliveryOption, calculateDeliveryDate} from '../../Script/deliveryOptions.js';
import { renterPaymentSummary } from './paymentSummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';


export function renderOrderSummary(){

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionsId; //get the delivery option id from the Cart.js

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML += `
    <div class="cart_item_div js_cart_item_conatiner js-cart-item-div-${matchingProduct.id}">
      <div class="delivery_date">Delivery Date: ${dateString}</div>

      <div class="cart_item_grid">
        <img
          class="product_img"
          src="${matchingProduct.image}"
          alt="Socks"
        />

        <div class="cart_item_details">
          <div class="product_name">
            ${matchingProduct.name}
          </div>

          <div class="product_price">$${formatCurrency(matchingProduct.pricecent)}</div>

          <div class="js_product_quantity-${matchingProduct.id}">
            <span> Quantity: <span class="order_qty js-qty-label-${matchingProduct.id}">${cartItem.quantity}</span> </span>

            <span class="modify_qty link-primary update_qty_link js_update_link" data-product-id="${matchingProduct.id}">Update</span>
            
            <input class="quantity_input js-qty-input-${matchingProduct.id}"/>
            <span class="modify_qty save_qty_link link-primary js_save_link" data-product-id="${matchingProduct.id}">Save</span>

            <span class="modify_qty link-primary js_delete_link" data-product-id="${matchingProduct.id}">Delete</span>
          </div>
        </div>

        <div class="delivery_option_div">
          <div class="delivery_title">Choose a delivery option:</div>
          ${deliveryOptionsHTML(matchingProduct,cartItem)}
        </div>
      </div>
    </div>`;
  });

  function deliveryOptionsHTML(matchingProduct,cartItem){
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
      const dateString = calculateDeliveryDate(deliveryOption);

      const priceString = deliveryOption.pricecents === 0? 'FREE': `$${formatCurrency(deliveryOption.pricecent)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionsId;

      html += `<div class="delivery_option js_delivery_option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
        <input
          class="delivery_option_radio"
          type="radio"
          ${isChecked? 'checked': ''}
          name="devivery_option_${matchingProduct.id}"
        />
        <div class="shipment_date_price">
          <div class="delivery_option_date">${dateString}</div>
          <div class="delivery_option_price">${priceString} Shipping</div>
        </div>
      </div>`;
    });

    return html;
  }

  document.querySelector(".js_order_summary").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".js_delete_link").forEach((link) => {
    link.addEventListener('click',() => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      // const container = document.querySelector(`.js-cart-item-div-${productId}`);

      // container.remove();

      updateCartQuantity();
      renderCheckoutHeader();
      renderOrderSummary();
      renterPaymentSummary();
    });
  });

  function updateCartQuantity(){
    // let cartQty = 0;

    // cart.forEach((cartItem) => {
    //   cartQty += cartItem.quantity;
    // });
    const cartQty = calculateCartQty();

    document.querySelector(".js_retrun_to_home").innerHTML= `${cartQty} items`;
  }
  updateCartQuantity();

  document.querySelectorAll(".js_update_link")
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        const saveQty = document.querySelector(`.js-cart-item-div-${productId}`);

        saveQty.classList.add("is_editing_qty");
      });
    });

  document.querySelectorAll(".js_save_link")
    .forEach((link) => {
      link.addEventListener('click',() => {
        const productId = link.dataset.productId;

        const qtyInput = document.querySelector(`.js-qty-input-${productId}`);

        const newQty = Number(qtyInput.value);

        if(newQty < 0 || newQty >= 1000){
          alert('Quantity must be at least 0 and less than equal to 10');
          return;
        }

        updateQuantity(productId,newQty);

        const saveQty = document.querySelector(`.js-cart-item-div-${productId}`);

        saveQty.classList.remove('is_editing_qty');

        const qtyLabel = document.querySelector(`.js-qty-label-${productId}`);

        qtyLabel.innerHTML = newQty;

        updateCartQuantity();
        renderCheckoutHeader();
        renderOrderSummary();
        renterPaymentSummary();
      });
    });


  document.querySelectorAll(".js_delivery_option")
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {productId,deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId,deliveryOptionId);
        renderOrderSummary();
        renterPaymentSummary();
      });
  });
}



