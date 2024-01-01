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

      <div class="added_checked">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button class="add_to_cart_btn js_add_to_cart" data-product-id="${product.id}">Add to Cart</button>
    </div>`;
});

document.querySelector(".js_products_grid").innerHTML = productsHTML;

document.querySelectorAll(".js_add_to_cart").forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    const quantitySelector = document.querySelector(`.js-qty-selector-${productId}`);

    const qty = Number(quantitySelector.value);

      if(matchingItem){
        matchingItem.quantity += qty;
      }else{
        cart.push({
          productId: productId,
          quantity: qty,
        });
      }

      let cartQty = 0;

      cart.forEach((item) => {
        cartQty += item.quantity;
      });

      document.querySelector(".js-cart_qty").innerHTML = cartQty;
      console.log(cart);
  });
});

