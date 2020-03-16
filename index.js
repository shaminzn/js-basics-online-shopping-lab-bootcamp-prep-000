var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
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
  for (var i = 0; i < cart.length; i++)
  {

    if(cart[i].itemName === item)
    cart.splice(i, item)


     if (cart[(cart.length) - 1 ].itemName !=item)
     return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber.length === 0 )
    return "Sorry, we don't have a credit card on file for you."

    var order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return order
}
