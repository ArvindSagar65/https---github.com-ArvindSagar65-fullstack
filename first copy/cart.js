function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPrice = 0;

  const cartItemsList = document.querySelector('.cart-items ul');
  const cartTotal = document.querySelector('.cart-total p');
  const cartImageContainer = document.querySelector('.images');

  // Clear previous cart items
  cartItemsList.innerHTML = '';
  // Display each item in the cart
  cart.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
    totalPrice += item.price;

    // Display image for each item
    const image = document.createElement('img');
    image.src = item.image; // Use the image URL from localStorage
    image.alt = item.name;
    image.style.width = '100px'; // Adjust the image size
    image.style.height = '100px'; // Adjust the image size
    cartImageContainer.appendChild(image);

    // Update total price
  });

  // Update the total price display
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

function clearCart() {
  localStorage.clear('cart');
  alert('Your cart has been cleared!');
  location.reload();
}


// Load the cart when the page is loaded
document.addEventListener('DOMContentLoaded', loadCart);
