'use strict';
// eslint-disable-next-line no-undef
fishImgs[cutter.jpeg,chinook.jpg,family.jpg,fish.jpg,salmon.png,frosted-cookie.jpg,shirt.jpg];

var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var fishImgs = document.getElementsByClassName('carouselImg');
  for(i = 0; i < fishImgs.lenght; i++) {
    fishImgs[i].style.display ='none';
  }
  slideIndex++;
  if (slideIndex > fishImgs.lenght) (slideIndex = 1);
  fishImgs[slideIndex - 1].style.display = 'block';
  setTimeout(carousel,2000);
}
