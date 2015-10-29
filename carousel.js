
dotsLimit = 12
images = document.getElementById('carousel-images');
dots = document.getElementById("jump-dots")
lightGrey ="rgb(217, 217, 217)"
orange = "rgb(254, 169, 52)"
  
window.initialOffset = 0
window.imageWidthPx = 680;
window.dotWidthEm = 3
window.currImage = 0

window.currImageLeft = initialOffset
window.currDotPageStart
window.currDotPageLeft

function setImageUlWidth () { 
  window.numImages = images.childElementCount

  // These lines currently don't seem to work.
  var widthString = (imageWidthPx - 1) * numImages + "px;"
  images.style.width = widthString
  images.setAttribute("style" , "width:" + widthString )
}

function shiftImage(goBack) {
  
  var sign = !!goBack ? -1 : 1;

  var i = currImage + sign
  i = i >= numImages ? 0 : i;

  if(i >= 0) {
    goToImage(i)
  }
}

function shiftJumpDotPage(goBack) {

  var sign = !!goBack ? -1 : 1;

  var shiftDistance = dotsLimit - 2
  var i = currDotPageStart + (shiftDistance * sign)

  if(i >= 0) {
    shiftToDotPageStart(i)
  }

  currDotPageStart = i
  // var dotInPage = index % dotsLimit
  // if(dotInPage >= (dotsLimit - 1)){

  // }

}

function goToImage(index) {
  currImageLeft = -1 * index * imageWidthPx
  // Why does this next line know what images is?
  images.setAttribute('style','left:' + currImageLeft + 'px');
  switchDotColour(index, true)
  if(currImage !== index) {
    switchDotColour(currImage);
  }
  
  currImage = index
}

function shiftToDotPageStart(index) {
  // this is too similar to above function
  currDotPageLeft = -1 * index * dotWidthEm
  var dots = document.getElementById('jump-dots')
  dots.setAttribute('style','left:' + currDotPageLeft + 'em');

}

function switchDotColour(index, selected) {

  var colour = !!selected ? orange : lightGrey;
  var dot = document.getElementById("dot" + index)
  dot.setAttribute("style","background-color:" + colour + ";")
}

function createJumpDots() {

  for(var i = 0; i < numImages; i++){
   
    var dot = document.createElement("div") 
    dot.setAttribute("class","jump-dot")
    dot.setAttribute("id", "dot" + i)
    dot.setAttribute("onclick","goToImage(" + i + ")")
    dots.appendChild(dot)
  }
  setJumpDotContainerWidth()
  setJumpDotsWidth()

  window.currDotPageStart = 0

}

function setJumpDotContainerWidth (dotsLimitOverride) {
  var numDisplayDots = numImages > dotsLimit ? dotsLimit : numImages;
  var dotsContainer = dots.parentElement
  dotsContainer.setAttribute("style", "width: " + numDisplayDots * 3 + "em;")
}

function setJumpDotsWidth () {
  // This blats the left property currently
  dots.setAttribute("style", "width: " + numImages * 3 + "em;")
}
setImageUlWidth()
createJumpDots()
goToImage(0)