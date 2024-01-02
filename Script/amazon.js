import {cart} from '../Script/cart.js';
import { products } from './Products_data.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="products">
      <div class="product_img_div">
        <img
          class="product_img"
          src="${product.image}"
          alt="Socks"
        />
      </div>

      <div class="product_details">
        ${product.name}
      </div>

      <div class="product_rating_div">
        <img
          class="product_rating_star"
          src="images/ratings/rating-${product.review.star * 10}.png"
          alt="Rating Star"
        />
        <div class="product_rating_count">${product.review.count}</div>
      </div>

      <div class="product_price"> $${(product.pricecent / 100) .toFixed(2) }</div>

      <div class="product_quantity">
        <select class="js-qty-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product_space"></div>

      <div class="added_checke js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button class="add_to_cart_btn js_add_to_cart" data-product-id="${product.id}">Add to Cart</button>
    </div>`;
});

document.querySelector(".js_products_grid").innerHTML = productsHTML;

const addedMsgTimeout = {};

document.querySelectorAll(".js_add_to_cart").forEach((button) => {
  button.addEventListener('click', () => {
    const {productId} = button.dataset; //use destructuring shortcut (ProductId)

    let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    const quantitySelector = document.querySelector(`.js-qty-selector-${productId}`);

    const quantity = Number(quantitySelector.value);

    if(matchingItem){
      matchingItem.quantity += quantity;
    }else{
      cart.push({
        productId, //use destructuring shortcut (ProductId: ProductId); 
        quantity, //use destructuring shortcut (quantity: quantity);
      });
    }

    let cartQty = 0;

    cart.forEach((item) => {
      cartQty += item.quantity;
    });

    document.querySelector(".js-cart_qty").innerHTML = cartQty;

    //Added class to vidible product to add to the cart
    const addedMsg= document.querySelector(`.js-added-to-cart-${productId}`);
    addedMsg.classList.add('added_to_cart_visible');

    const previousTimeoutId = addedMsgTimeout[productId];

    if(previousTimeoutId){
      clearTimeout(previousTimeoutId);
    }

    //Remove the visible added message after 2 second
    const timeoutId = setTimeout(() => {
      addedMsg.classList.remove('added_to_cart_visible');
    },2000);

    addedMsgTimeout[productId] = timeoutId;
  });
});

