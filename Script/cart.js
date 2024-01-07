export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart =  [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryOptionsId: '1',
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryOptionsId:'2',
  }];
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;

  const quantitySelector = document.querySelector(`.js-qty-selector-${productId}`);

  const quantity = Number(quantitySelector.value);

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){
    matchingItem.quantity += quantity;
  }else{
    cart.push({
      productId, //use destructuring shortcut (ProductId: ProductId); 
      quantity, //use destructuring shortcut (quantity: quantity);
      deliveryOptionsId:'1',
    });
  }

    saveToStorage();
}

export function calculateCartQty(){
  let cartQty = 0;

  cart.forEach((cartItem) => {
    cartQty += cartItem.quantity;
  });

  return cartQty;
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateQuantity(prodictId, newQty){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(prodictId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQty;

  saveToStorage();
}