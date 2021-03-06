const menuBars = document.querySelector('.fa-bars');
const dropDown = document.querySelector('.navbar');
const headerHome = document.querySelector('.header-home');
const headerText = document.querySelector('.header-text');
const seanHome = document.querySelector('.sean-working');

menuBars.addEventListener('click', function () {
  dropDown.classList.toggle('hide');

})

window.addEventListener('load', function () {
  dropDown.classList.add('hide');
})

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    headerHome.classList.add('header--hidden');
    seanHome.style.display = 'none';
    headerText.style.display = 'none';

  } else {
    headerHome.classList.remove('header--hidden');
    seanHome.style.display = 'block';
    headerText.style.display = 'block';
  }
  lastScrollY = window.scrollY;
})


// Books

var right = document.getElementsByClassName("right");
    var si = right.length;
    var z=1;
    turnRight();
    function turnRight()
    {
        if(si>=1){
            si--;
        }
        else{
            si=right.length-1;
            function sttmot(i){
                setTimeout(function(){right[i].style.zIndex="auto";},300);
            }
            for(var i=0;i<right.length;i++){
                right[i].className="right";
                sttmot(i);
                z=1;
            }
        }
        right[si].classList.add("flip");
        z++;
        right[si].style.zIndex=z;
    }
    function turnLeft()
    {
        if(si<right.length){
            si++;
        }
        else{
            si=1;
            for(var i=right.length-1;i>0;i--){
                right[i].classList.add("flip");
                right[i].style.zIndex=right.length+1-i;
            }
        }
        right[si-1].className="right";
        setTimeout(function(){right[si-1].style.zIndex="auto";},350);
    }

// How do I make the menu go back up when another part of the page is clicked.

// What's the best way to add js for specific pages? For example, I want to change the navbar to not be fixed on all pages except the home page. Would it be best to just add a new script.js file just for that page? Or, would I be able to add something that targets specific pages?

// SENIOR PROJECT CAROUSELS:

// const spurButtonPrev = document.querySelector('.spur-button-prev');

// spurButtonPrev.addEventListener('click', function () {
//   const initial = document.querySelector('.initial');
//   initial.

// })




// copied from Medium:

// let itemClassName = "spur-photo";
// let items = document.querySelector('.spur-photo');
// let totalItems = items.length;
// let slide = 0;
// let moving = true;

// function setInitialClasses() {
//   items[totalItems - 1].classList.add('prev');
//   items[0].classList.add('active');
//   items[1].classList.add('next');
// }

// function setEventListeners() {
//   let next = document.querySelector('.spur-button-next')[0];
//   let prev = document.querySelector('.spur-button-prev')[0];

//   next.addEventListener('click', moveNext);
//   prev.addEventListener('click', movePrev);
// }

// function moveNext() {
//   if (!moving) {
//     if (slide === (totalItems - 1)) {
//       slide = 0;
//     } else {
//       slide++;
//     }
//     moveCarouselTo(slide);
//   }
// }

// function movePrev() {
//   if (!moving) {
//     if (slide === 0) {
//       slide = (totalItems - 1);
//     } else {
//       slide--;
//     }
//   }
//   moveCarouselTo(slide);
// }

// function disableInteraction() {
//   moving = true;
//   setTimeout(function() {
//     moving = false;
//   }, 500);
// }

// function moveCarouselTo(slide) {
//   if (!moving) {
//     disableInteraction();
//   }
//   let newPrevious = slide - 1;
//   let newNext = slide + 1;
//   let oldPrevious = slide - 2;
//   let oldNext = slide + 2;

//   if ((totalItems - 1) > 3) {
//     if (newPrevious <= 0) {
//       oldPrevious = (totalItems - 1);
//     } else if (newNext >= (totalItems - 1)) {
//       oldNext = 0;
//     }
//   }

//   if (slide === 0) {
//     newPrevious = (totalItems - 1);
//     oldPrevious = (totalItems - 2);
//     oldNext = (slide + 1);
//   } else if (slide === (totalItems - 1)) {
//     newPrevious = (slide - 1);
//     newNext = 0;
//     oldNext = 1;
//   }

//   items[oldPrevious].className = itemClassName;
//   items[oldNext].className = itemClassName;

//   items[newPrevious].className = itemClassName + " prev";
//   items[slide].className = itemClassName + " active";
//   items[newNext].className = itemClassName + " next";
// }

// function initCarousel() {
//   setInitialClasses();
//   setEventListeners();
//   moving = false;
// }

// initCarousel();