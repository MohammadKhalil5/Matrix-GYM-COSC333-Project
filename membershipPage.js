let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('nav ul');
menuIcon.addEventListener('click', () => {
   nav.classList.toggle('active'); 
});


let payButton = document.querySelector('.pay-btn');
payButton.addEventListener('click', (event) => {
   event.preventDefault(); 
   let cardNumber = document.getElementById('card-number');
   let expiry = document.getElementById('expiry');
   let cvv = document.getElementById('cvv');
   let email = document.querySelector('input[type="email"]');
   let phone = document.querySelector('input[type="tel"]');
   let valid = true;

   
   if (!/^\d{16}$/.test(cardNumber.value)) {
       alert('Please enter a valid 16-digit card number.');
       valid = false;
   }
   
   if (!/^(0[1-9]|1[0-2]) \/ \d{2}$/.test(expiry.value)) {
       alert('Please enter a valid expiry date in MM / YY format.');
       valid = false;
   }
   
   if (!/^\d{3}$/.test(cvv.value)) {
       alert('Please enter a valid 3-digit CVV code.');
       valid = false;
   }
   
   if (!/\S+@\S+\.\S+/.test(email.value)) {
       alert('Please enter a valid email address.');
       valid = false;
   }
   
   if (!/^\+?\d{7,15}$/.test(phone.value)) {
       alert('Please enter a valid phone number.');
       valid = false;
   }
   if (valid) {
       alert('Payment successful! Thank you for subscribing.');
   }
});


let cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', (event) => {
   let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/g, '');
   event.target.value = value.replace(/(.{4})/g, '$1 ').trim();
});

let expiryInput = document.getElementById('expiry');
expiryInput.addEventListener('input', (event) => {
   let value = event.target.value.replace(/\D/g, ''); 
   if (value.length >= 2) {
       value = value.substring(0, 2) + ' / ' + value.substring(2, 4); 
   }
   event.target.value = value; 
});

let planInputs = document.querySelectorAll('input[name="plan"]');
planInputs.forEach((input) => {
   input.addEventListener('change', () => {
       document.querySelectorAll('.plan-options label').forEach((label) => {
           label.style.backgroundColor = ''; 
       });
       input.parentElement.style.backgroundColor = '#d3f4ff'; 
   });
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener('click', (event) => {
       event.preventDefault();
       document.querySelector(anchor.getAttribute('href')).scrollIntoView({
           behavior: 'smooth',
       });
   });
});