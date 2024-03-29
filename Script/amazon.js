import {cart, addToCart, calculateCartQty} from '../Script/cart.js';
import { products } from './Products_data.js';
import { formatCurrency } from './Utils/money.js';

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

      <div class="product_price"> $${formatCurrency(product.pricecent)}</div>

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

//To display on the Web Page
document.querySelector(".js_products_grid").innerHTML = productsHTML;

function updateCartQty(){
  // let cartQty = 0;

  // cart.forEach((cartItem) => {
  //   cartQty += cartItem.quantity;
  // });

  const cartQty = calculateCartQty();

  document.querySelector(".js-cart_qty").innerHTML = cartQty;
}

const addedMsgTimeout = {};

function visibleAddedToCart(productId){
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
}

updateCartQty();

document.querySelectorAll(".js_add_to_cart").forEach((button) => {
  button.addEventListener('click', () => {
    const {productId} = button.dataset; //use destructuring shortcut (ProductId)

    addToCart(productId);

    updateCartQty();

    visibleAddedToCart(productId); 
  });
});

