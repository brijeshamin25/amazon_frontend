import {cart} from '../Script/cart.js';
import { products } from '../Script/Products_data.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
  <div class="cart_item_div">
    <div class="delivery_date">Delivery Date: Tuesday, June 21</div>

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

        <div class="product_price">$${matchingProduct.pricecent / 100}</div>

        <div>
          <span> Quantity: <span class="order_qty">${cartItem.quantity}</span> </span>

          <span class="modify_qty link-primary">Update</span>
          <span class="modify_qty link-primary">Delete</span>
        </div>
      </div>

      <div class="delivery_option_div">
        <div class="delivery_title">Choose a delivery option:</div>

        <div class="delivery_option">
          <input
            checked
            class="delivery_option_radio"
            type="radio"
            name="devivery_option_1"
          />
          <div class="shipment_date_price">
            <div class="delivery_option_date">Tuesday, June 21</div>
            <div class="delivery_option_price">Free Shipping</div>
          </div>
        </div>

        <div class="delivery_option">
          <input
            class="delivery_option_radio"
            type="radio"
            name="devivery_option_1"
          />
          <div class="shipment_date_price">
            <div class="delivery_option_date">Wednesday, January 3</div>
            <div class="delivery_option_price">$4.99 - Shipping</div>
          </div>
        </div>

        <div class="delivery_option">
          <input
            class="delivery_option_radio"
            type="radio"
            name="devivery_option_1"
          />
          <div class="shipment_date_price">
            <div class="delivery_option_date">Monday, January 1</div>
            <div class="delivery_option_price">$9.99 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

document.querySelector(".js_order_summary").innerHTML = cartSummaryHTML;