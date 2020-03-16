var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item, itemPrice:Math.floor(Math.random() * 101)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  var txt=`In your cart, you have`
  if(cart === undefined || cart.length === 0)
  return "Your shopping cart is empty."

  for (var i = 0 ; i < cart.length; i++){

  if (cart.length === 1){
      txt= txt + ` ${cart[i].itemName} at $${cart[i].itemPrice}`
  return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
  }

  var next = ` ${cart[i].itemName} at $${cart[i].itemPrice},`


  if (i === cart.length - 1 ){
      next = ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
  }


  txt = txt + next

  }

  return txt
}

function total() {
    var sum = 0;

    for (var i = 0; i < cart.length; i++){
     sum = sum + cart[i].itemPrice
    }

  console.log(sum)
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {

    if(cart[i].itemName === item) {
    cart.splice(i, item)
}

     if (cart[(cart.length) - 1 ].itemName !=item) {
     return 'That item is not in your cart.'
   }
  }

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber.length === 0 )
    return "Sorry, we don't have a credit card on file for you."

    var order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return order
}
