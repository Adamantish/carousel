
images = document.getElementById('carousel-images');

window.imageWidth = 679;
// var currImageLeft = images.getAttribute('style', 'left');
window.currImageLeft = 2

function moveImage(goBack) {
  
  sign = !!goBack ? -1 : 1;
  // console.log(currImageLeft)

  currImageLeft = currImageLeft - (imageWidth * sign);
  // console.log(currImageLeft)
  images.setAttribute('style','left:' + currImageLeft + 'px');
}
