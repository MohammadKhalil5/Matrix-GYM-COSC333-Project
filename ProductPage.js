let priceRange = document.getElementById('price-range');
let priceValue = document.getElementById('price-value');

// functionality for the add to cart button
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(button => {
    
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart-btn button').textContent = `Cart (${cartCount})`;
    })
})

// functionality for the reset button
document.getElementById('reset_button').addEventListener('click', () => {

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    })

    priceRange.value = priceRange.min;

    priceValue.textContent = priceRange.min;
})

// display the price 
priceRange.addEventListener('input', () => {
    priceValue.textContent = priceRange.value;
})