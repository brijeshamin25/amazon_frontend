export const deliveryOptions = [{
  id:'1',
  deliveryDays: 7,
  pricecent: 0,
}, {
  id:'2',
  deliveryDays:3,
  pricecent:499,
},{
  id:'3',
  deliveryDays:1,
  pricecent:999,
}];

export function getDeliveryOption (deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId){
      deliveryOption = option;
    }
  });

  return deliveryOption;
}