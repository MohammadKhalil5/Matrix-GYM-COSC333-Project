let menuIcon = document.querySelector('.menu-icon');
let navMenu = document.querySelector('nav-ul');

menuIcon.addEventListener('click',() => {
    navMenu .classList.toggle('active');
});

let journeyButton = document.querySelector('.btn');
journeyButton.addEventListener('click',()=>{
    document.querySelector('.about-us').scrollIntoView({behavior:'smooth'});
});

let readMoreButton = document.querySelector('.read-more');
readMoreButton.addEventListener ('click',()=>{
    alert('Learn more about us!');
});
   

let buttons = document.querySelectorAll('.product-btn');
buttons.forEach(button => {
 button.addEventListener('click', () => {
   let url = button.getAttribute('data-url');
   window.location.href = url;
 });
});
        
        
        let startButtons = document.querySelectorAll('.start-button');
        startButtons.forEach(button => {
         button.addEventListener('click', event => {
           let planName = event.target.closest('.membership-card').querySelector('h3').textContent;
           alert(`You have selected the ${planName}!`);
         });
        });