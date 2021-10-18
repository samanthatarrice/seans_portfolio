const menuBars = document.querySelector('.fa-bars');
const dropDown = document.querySelector('.navbar');

menuBars.addEventListener('click', function () {
  dropDown.classList.toggle('hide');

})

window.addEventListener('load', function () {
  dropDown.classList.add('hide');
})

// How do I make the menu go back up when another part of the page is clicked.

// What's the best way to add js for specific pages? For example, I want to change the navbar to not be fixed on all pages except the home page. Would it be best to just add a new script.js file just for that page? Or, would I be able to add something that targets specific pages?