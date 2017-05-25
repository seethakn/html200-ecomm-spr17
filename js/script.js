/* script to execute e-commerce website functionality */

//Modified products array to include product id for each product object
var products = [
  {
    "id": 001,
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "id": 002,
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "id": 003,
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "id": 004,
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "id": 005,
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "id": 006,
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "id": 007,
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "id": 008,
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

var shoppingCart = []; //Initialize shopping cart as an array
var total = 0; //Variable to hold the total number of items in the shopping cart

//Function to be triggered on form submit
function capture() {
  event.preventDefault(); //stops form submit
  console.log("Thanks for signing up " + document.signupForm.email.value + " -- Exclusive email offers and Winter Scarves product news is heading your way. Let the fun begin!");
}


/* Function to increment or decrement (toggle) product count
   Parameters : productId - item being added or removed,
                toggleCount - add or remove count
*/
function shopProduct(productId,toggleCount){
  //Find if this particular product has already been added in the cart
  var result = shoppingCart.find(x => x.id == productId);

  /*If the product has not been added to the cart before and is being added now
  then push the new item to the cart else simply increase the count of the corresponding
  item in the cart */
  if (result == undefined && toggleCount == 1){
    shoppingCart.push({"id": productId, "count": toggleCount});
  }
  else if (result != undefined){
    result.count = result.count + toggleCount;
    /* if the item is being removed from the cart multiple times, then
    item count becomes negative and hence simply reset its value to zero */
    if (result.count < 0){
      result.count = 0;
    }
  }

  //set the total to zero every time an addition or removal is made so the total count is calculated right
  total = 0;
  shoppingCart.forEach(calcTotalCart); //For every object in the shoppingCart, call calcTotalCart()

  //Function to calculate total number of products in the cart
  function calcTotalCart(item){
    //console.log("item count" + item.count);
    total = total + item.count;
    var productName = products.find(y => y.id == item.id).name;
    //Display each individual item name and it's individual count
    console.log(productName + " - Quantity = " + item.count);
  }

  //Display total number of items in the cart
  console.log("Total number of items in your cart = " + total);
  //Display total number of items in the cart next to the shopping cart icon in the nav bar
  document.getElementById("cartCount").innerHTML = " (" + total + ")";
}


/********************************************************/
/*
For reference - what find() actually does

var result = shoppingCart.find(x => x.id == productId);
(or)
var result = shoppingCart.find(searchProducts);
function searchProducts(item){
  return item.id == productId;
}

shoppingCart.forEach(item => total += item.count);
(or)
shoppingCart.forEach(calcTotalCart);
function calcTotalCart(item){
  total = total + item.count;
}
*/

/* Yet to try
Functionality to displaying information when each individual is being added/removed
if (toggleCount == 1){
  console.log(products.find(z => z.id == productId).name + " was added to your cart");
}
else if (result != undefined && result.count > 0){
  console.log(products.find(z => z.id == productId).name + " was removed from your cart");
}
*/
