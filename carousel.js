
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
    goToImage(currImage)
  }
}

function goToImage(index) {
  currImageLeft = initialOffset - (index * imageWidth)
  images.setAttribute('style','left:' + currImageLeft + 'px');
  switchDotColour(index, true)
  switchDotColour(currImage)
  currImage = index
}

function switchDotColour(index, selected) {
  var lightGrey ="rgb(217, 217, 217)"
  var orange = "rgb(254, 169, 52)"

  colour = selected ? orange : lightGrey;
  dot = document.getElementById("dot" + index)
  dot.setAttribute("style","background-color:" + colour + ";")
}
function createJumpDots() {

  var dots = document.getElementById("jump-dots")
  
  for(var i = 0; i < numImages; i++){
   
    var dot = document.createElement("div") 
    dot.setAttribute("class","jump-dot")
    dot.setAttribute("id", "dot" + i)
    dot.setAttribute("onclick","goToImage(" + i + ")")
    dots.appendChild(dot)
  }
}

setImageUlWidth()
createJumpDots()