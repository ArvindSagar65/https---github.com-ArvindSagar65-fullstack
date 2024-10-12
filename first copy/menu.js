let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or initialize it

function addToCart(button) {
  const itemName = button.getAttribute('data-name');
  const itemPrice = parseFloat(button.getAttribute('data-price'));
  const itemUrl = button.getAttribute('imgurl');
  console.log(itemUrl)

  // Add item to cart array
  cart.push({ name: itemName, price: itemPrice ,image: itemUrl});

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${itemName} has been added to the cart!`);
}
