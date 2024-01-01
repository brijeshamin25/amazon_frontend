let products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  review:{
    star: 4.5,
    count: 87,
  },
  pricecent: 1090,
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  review: {
    star: 4,
    count: 127,
  },
  pricecent: 2095,
}, {
  image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adult Plain Cotton T-Shirt 2 Pack',
  review: {
    star: 4.5,
    count: 56,
  },
  pricecent: 799,
}]

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

      <div class="product_price">${(product.pricecent / 100) .toFixed(2) }</div>

      <div class="product_quantity">
        <select>
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

      <button class="add_to_cart_btn">Add to Cart</button>
    </div>`;
});

document.querySelector(".js_products_grid").innerHTML = productsHTML;

