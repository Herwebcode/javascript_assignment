function changeText() {
  document.getElementById("main-heading").innerText = "You clicked the button!";
}

function changeColor() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "lightgreen";
  box.style.color = "darkblue";
}

function addElement() {
  const newElement = document.createElement("p");
  newElement.id = "new-paragraph";
  newElement.innerText = "A new paragraph was added!";
  document.body.appendChild(newElement);
}

function removeElement() {
  const element = document.getElementById("new-paragraph");
  if (element) {
    element.remove();
  }
}
