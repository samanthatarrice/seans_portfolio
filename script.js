const menuBars = document.querySelector('.fa-bars');
const dropDown = document.querySelector('.navbar');

menuBars.addEventListener('click', function () {
  dropDown.classList.toggle('hide');

})

window.addEventListener('load', function () {
  dropDown.classList.add('hide');
})

// How do I make the menu go back up when another part of the page is clicked