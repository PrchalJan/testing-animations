"use strict";

console.log(document.body);
const states = {
  nav: false,
}

document.body.addEventListener('click', function() {
  this.classList.toggle('nav-open');
  // if(states.nav === false) {
  //   document.body.classList.add('nav-open');
  //   states.nav = true;
  // } else {
  //   document.body.classList.remove('nav-open');
  //   states.nav = false;
  // }
  
  console.log('body click event occured');
})

