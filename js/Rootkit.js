const menuButton = document.getElementById('clickMenu');
const menu = document.getElementById('mynav');
const closeButton = document.getElementById('close');

let isMenuOpen = false;

menuButton.addEventListener('click', function() {
    closeButton.classList.remove('rotated')
    menu.classList.add('active'); 
});
closeButton.addEventListener('click', function() {
    closeButton.classList.add('rotated');
    menu.classList.remove('active'); 
});
