import {renderOrderSummary} from '../../Script/checkout/orderSummary.js';
import {loadFromStorage} from '../../Script/cart.js';

describe('test suite: renderOrderSummary', () => {
  it('displays the cart', () => {
    document.querySelector('.js_test_container').innerHTML = `
    <div class="js_order_summary"></div>
    `;

    // const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    // const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        quantity:2,
        deliveryOptionsId:'1',
      },{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionsId:'2',
      }]);
    });
    //console.log(localStorage.getItem('cart'));
    loadFromStorage();

    renderOrderSummary();

    // expect(
    // document.querySelectorAll('.js_cart_item_conatiner').length
    // ).toEqual(2);

    // expect(document.querySelector(`.js_product_quantity-${productId1}`).innerText
    // ).toContain('Quantity: 2');

    // expect(document.querySelector(`.js_product_quantity-${productId2}`).innerText
    // ).toContain('Quantity: 1');
  });
});