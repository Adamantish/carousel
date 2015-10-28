console.log("This is JS!")

var Modal = function(title, description){
  this.title = title
  this.description = description
}

Modal.prototype.render = function() {

  var container = document.createElement("div");
  container.setAttribute("class", "modal-background");

  var modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.setAttribute("onclick","removeModal()")

  var heading = document.createElement('h3');
  heading.innerText = this.title
  var paragraph = document.createElement('p');
  paragraph.innerText = this.description

  modal.appendChild(heading)
  modal.appendChild(paragraph)
  container.appendChild(modal)

  return container;

}

// Modal.prototype.

function showModal() {
  var modal = new Modal("My JS Component", "Components are sweet")
  var element = modal.render()
  document.getElementsByTagName('body')[0].appendChild(element)
}

function removeModal() {
  console.log("Hey!")
  var remove_me = document.getElementsByClassName('modal-background')[0]
  remove_me.parentNode.removeChild(remove_me)
}