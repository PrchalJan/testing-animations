// Postpone resizing events
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
        console.log('debounced')
      }
    }, wait);
    if (callNow) {
      func.apply(context, args);
      console.log('debounced');
    } 
  }
}

function renderGrid(colCount) {
	let cols = colCount || 1;
  let blocks = document.querySelectorAll('.grid__item');
	let pad = 0, newleft, newtop;
	
	for(let i = 0; i < blocks.length; i++) {
		blocks[i].style.top = 0;
		blocks[i].style.left = 0;
	}

	for(let i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
		    blocks[i].style.top = newtop+"px";
		} else {
			if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";	
		}
    }
}

// renderGrid();

function renderResponsiveGrid() {
	if(window.innerWidth < 900) {
		
		renderGrid(3);
	} else {
		renderGrid(4);
		console.log(window.innerWidth);
	}
}


window.addEventListener('load', renderResponsiveGrid, false);

window.addEventListener('resize', debounce(function() {
	renderResponsiveGrid();
}, 400))



