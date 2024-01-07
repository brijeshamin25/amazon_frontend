export function getProduct(productId){
  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products = [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  review:{
    star: 4.5,
    count: 87,
  },
  pricecent: 1090,
  keywords: [
    "Socks",
    "Sports",
    "Apparel"
  ]
}, {
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  review: {
    star: 4,
    count: 127,
  },
  pricecent: 2095,
}, {
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adult Plain Cotton T-Shirt 2 Pack',
  review: {
    star: 4.5,
    count: 56,
  },
  pricecent: 799,
},{
  id: "54e0eccd-8f36-462b-b68a-8182611d9add",
  image: 'images/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  review: {
    star:5,
    count: 2197,
  },
  pricecent: 1899,
},{
  id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  image: 'images/products/6-piece-white-dinner-plate-set.jpg',
  name: '6 Piece White Dinner Plate Set',
  review: {
    star:4,
    count: 37,
  },
  pricecent: 2067,
},{
  id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
  image: 'images/products/6-piece-non-stick-baking-set.webp',
  name: '6-Piece Nonstick, Carbon Steel Oven Bakeware',
  review: {
    star:4.5,
    count: 175,
  },
  pricecent: 3499,
}, {
  id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
  image: 'images/products/plain-hooded-fleece-sweatshirt-yellow.jpg',
  name: 'Plain Hooded Fleece Sweatshirt',
  review: {
    star:4.5,
    count: 317,
  },
  pricecent: 2400,
  keywords: [
    "Hoodies",
    "Sweaters",
    "Apparel",
  ],
},{
  id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
  image: 'images/products/luxury-tower-set-6-piece.jpg',
  name: 'Luxury Towel Set - Graphite Gray',
  review: {
    star:4.5,
    count: 144,
  },
  pricecent: 3599,
},{
  id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
  image: 'images/products/liquid-laundry-detergent-plain.jpg',
  name: 'Liquid Laundry Detergent 110 Loads, 82.5 Fl Oz',
  review: {
    star:4.5,
    count: 305,
  },
  pricecent: 2899,
},{
  id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
  image: 'images/products/knit-athletic-sneakers-gray.jpg',
  name: 'Waterproof Knit Athletic Sneakers - Gray',
  review: {
    star:4,
    count: 89,
  },
  pricecent: 3390,
},{
  id: "5968897c-4d27-4872-89f6-5bcb052746d7",
  image: 'images/products/women-chiffon-beachwear-coverup-black.jpg',
  name: "Women's Chiffon Beachwear Cover Up- Black",
  review: {
    star:4.5,
    count: 235,
  },
  pricecent: 2070,
},{
  id: "aad29d11-ea98-41ee-9285-b916638cac4a",
  image: 'images/products/round-sunglasses-black.jpg',
  name: 'Round Sunglasses',
  review: {
    star:4.5,
    count: 30,
  },
  pricecent: 1560,
},{
  id: "04701903-bc79-49c6-bc11-1af7e3651358",
  image: 'images/products/women-beach-sandals.jpg',
  name: "Women's Two Strap Buckle Sandals - Tan",
  review: {
    star:4.5,
    count: 562,
  },
  pricecent: 2499,
},{
  id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
  image: 'images/products/blackout-curtain-set-beige.webp',
  name: 'Blackout Curtains Set 4-Pack - Beige',
  review: {
    star:4.5,
    count: 232,
  },
  pricecent: 4599,
},{
  id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
  image: 'images/products/men-slim-fit-summer-shorts-gray.jpg',
  name: "Men's Slim-Fit Summer Shorts",
  review: {
    star:4,
    count: 160,
  },
  pricecent: 1699,
},{
  id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
  image: 'images/products/electric-glass-and-steel-hot-water-kettle.webp',
  name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
  review: {
    star:5,
    count: 846,
  },
  pricecent: 3074,
},{
  id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
  image: 'images/products/facial-tissue-2-ply-18-boxes.jpg',
  name: "Ultra Soft Tissue 2-Ply - 18 Box",
  review: {
    star:4,
    count: 99,
  },
  pricecent: 2374,
},{
  id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
  image: 'images/products/straw-sunhat.webp',
  name: "Straw Lifeguard Sun Hat",
  review: {
    star:4,
    count: 215,
  },
  pricecent: 2200,
}, {
  id:"id1",
  image:'images/products/umbrella.jpg',
  name:"Large Green Umbrella",
  review: {
    star: 5,
    count: 456,
  },
  pricecent:2999,
},{
  id:"id2",
  image:'images/products/backpack.jpg',
  name:'Black Backpack',
  review:{
    star:4.5,
    count:123,
  },
  pricecent:2500,
},{
  id:"id3",
  image: 'images/products/men-cozy-fleece-zip-up-hoodie-red.jpg',
  name:"Men's Full-Zip Hooded Fleece Sweatshirt",
  review:{
    star:4.5,
    count:3157,
  },
  pricecent:2400,
},{
  id:"id4",
  image:'images/products/kitchen-paper-towels-30-pack.jpg',
  name:'2-Ply Kitchen Paper Towels - 30 Pack',
  review:{
    star:4.5,
    count:1045,
  },
  pricecent:5799,
},{
  id:"id5",
  image:'images/products/floral-mixing-bowl-set.jpg',
  name:'10-Piece Mixing Bowl Set with Lids - Floral',
  review:{
    star:5,
    count:679,
  },
  pricecent:3899
},{
  id:"id6",
  image:'images/products/countertop-blender-64-oz.jpg',
  name:'Countertop Blender - 64oz, 1400 Watts',
  review:{
    star:4,
    count:3,
  },
  pricecent:10747,
}];