
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

  var i = currImage + sign
  i = i >= numImages ? 0 : i;

  if(i >= 0) {
    goToImage(i)
  }
}

function goToImage(index) {
  currImageLeft = initialOffset - (index * imageWidth)
  images.setAttribute('style','left:' + currImageLeft + 'px');
  switchDotColour(index, true)
  if(currImage !== index) {
    switchDotColour(currImage);
  }
  
  currImage = index
}

function switchDotColour(index, selected) {
  var lightGrey ="rgb(217, 217, 217)"
  var orange = "rgb(254, 169, 52)"

  var colour = !!selected ? orange : lightGrey;
  var dot = document.getElementById("dot" + index)
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
goToImage(0)