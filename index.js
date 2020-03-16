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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber.length === 0 )
    return "Sorry, we don't have a credit card on file for you."

    var order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return order
}
