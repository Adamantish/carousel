
images = document.getElementById('carousel-images');

window.imageWidth = 679;
window.currImage = 0
window.initialOffset = 2
window.currImageLeft = initialOffset

function setImageUlWidth () { 
  var images = document.getElementById('carousel-images')
  window.numImages = images.childElementCount
  images.setAttribute("style","width: " + (imageWidth - 1) * numImages + "px" )
}

function moveImage(goBack) {
  
  sign = !!goBack ? -1 : 1;

  currImage = currImage + sign
  currImage = currImage >= numImages ? 0 : currImage;

  if(currImage >= 0) {
    currImageLeft = initialOffset - (currImage * imageWidth)
    // currImageLeft = currImageLeft - (imageWidth * sign);
    images.setAttribute('style','left:' + currImageLeft + 'px');
  }
}

function createJumpDots() {

  var dots = document.getElementById("jump-dots")
  
  for(var i = 0; i < numImages; i++){
   
    var dot = document.createElement("div") 
    dot.setAttribute("class","jump-dot")
    dots.appendChild(dot)
  }
}

setImageUlWidth()
createJumpDots()