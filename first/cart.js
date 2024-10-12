function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPrice = 0;

  const cartItemsList = document.querySelector('.cart-items ul');
  const cartTotal = document.querySelector('.cart-total p');
  const cartImageContainer = document.querySelector('.images');

  
  cartItemsList.innerHTML = '';

  cart.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
    totalPrice += item.price;

    
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    image.style.width = '100px'; 
    image.style.height = '100px';
    cartImageContainer.appendChild(image);

 
  });

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

function clearCart() {
  localStorage.clear('cart');
  alert('Your cart has been cleared!');
  location.reload();
}



document.addEventListener('DOMContentLoaded', loadCart);
