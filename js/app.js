"use strict";

console.log(document.body);
const states = {
  nav: false,
}

const closeIcon = document.querySelector('.nav__close-icon');


document.body.addEventListener('click', function() {
  this.classList.toggle('li-open');
  // if(states.nav === false) {
  //   document.body.classList.add('nav-open');
  //   states.nav = true;
  // } else {
  //   document.body.classList.remove('nav-open');
  //   states.nav = false;
  // }
  
  console.log('body click event occured');
})

