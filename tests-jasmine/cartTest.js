import {addToCart, cart, loadFromStorage} from '../Script/cart.js';

describe('test suite: addToCart', function() {
  it('adds an exesiting product to the cart', function() {
    
  });

  it('adds a new products to the cart', function(){ 
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    //console.log(localStorage.getItem('cart'));
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  });
});