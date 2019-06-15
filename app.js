
// Detect swipe:
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', function(e) {
  handleTouchMove(e, 
    function() {
    document.body.style.backgroundColor = 'orange';
  }, function() {
    document.body.style.backgroundColor = 'brown';
  }, function() {
    document.body.style.backgroundColor = 'black';
  }, function() {
    document.body.style.backgroundColor = 'goldenrod';
  })
}, false);

var xDown = null;
var yDown = null;

function getTouches(e) {
  return e.touches ||              // browser API
         e.originalEvent.touches;  // jQuery
}

function handleTouchStart(e) {
  const firstTouch = getTouches(e)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

function handleTouchMove(e, left, right, up, down) {
  if(!xDown || !yDown) {
    return;
  };

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if(Math.abs(xDiff) > Math.abs(yDiff)) {
    if(xDiff > 0) {
      // Left Swipe
      left()
    } else {
      //Right Swipe
      right()
    }
  } else {
    if(yDiff > 0) {
      // Up Swipe
      up()
    } else {
      // Down Swipe
      down()
    }
  }
  // reset values
  xDown = null;
  yDown = null;

}