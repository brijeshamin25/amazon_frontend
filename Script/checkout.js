import {cart,removeFromCart,calculateCartQty,updateQuantity} from '../Script/cart.js';
import { products } from '../Script/Products_data.js';
import { formatCurrency } from './Utils/money.js';

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
  <div class="cart_item_div js-cart-item-div-${matchingProduct.id}">
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

        <div class="product_price">$${formatCurrency(matchingProduct.pricecent)}</div>

        <div>
          <span> Quantity: <span class="order_qty js-qty-label-${matchingProduct.id}">${cartItem.quantity}</span> </span>

          <span class="modify_qty link-primary update_qty_link js_update_link" data-product-id="${matchingProduct.id}">Update</span>
          
          <input class="quantity_input js-qty-input-${matchingProduct.id}"/>
          <span class="modify_qty save_qty_link link-primary js_save_link" data-product-id="${matchingProduct.id}">Save</span>

          <span class="modify_qty link-primary js_delete_link" data-product-id="${matchingProduct.id}">Delete</span>
        </div>
      </div>

      <div class="delivery_option_div">
        <div class="delivery_title">Choose a delivery option:</div>

        <div class="delivery_option">
          <input
            checked
            class="delivery_option_radio"
            type="radio"
            name="devivery_option_${matchingProduct.id}"
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
            name="devivery_option_${matchingProduct.id}"
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
            name="devivery_option_${matchingProduct.id}"
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

document.querySelectorAll(".js_delete_link").forEach((link) => {
  link.addEventListener('click',() => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-div-${productId}`);

    container.remove();

    updateCartQuantity();
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
        alert('Quantity must be at least 0 and less than 1000');
        return;
      }

      updateQuantity(productId,newQty);

      const saveQty = document.querySelector(`.js-cart-item-div-${productId}`);

      saveQty.classList.remove('is_editing_qty');

      const qtyLabel = document.querySelector(`.js-qty-label-${productId}`);

      qtyLabel.innerHTML = newQty;

      updateCartQuantity();
    });
  });




