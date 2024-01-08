import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

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

function isWeekend(date){
  const dayOfWeek = date.format('dddd');

  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption){
  // const today = dayjs();
  // const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
  let remaningDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remaningDays > 0){
    deliveryDate = deliveryDate.add(1,'day');

    if(!isWeekend(deliveryDate)){
      remaningDays--;
    }
  }

  const dateString = deliveryDate.format('dddd, MMMM D');

  return dateString;
}