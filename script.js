function changeText() {
  document.getElementById("info-text").textContent =
    "The text has been changed dynamically!";
}

function toggleStyle() {
  const title = document.getElementById("main-title");
  title.classList.toggle("highlight");
}

function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This paragraph was added dynamically!";
  newPara.id = "new-paragraph";
  document.getElementById("dynamic-content").appendChild(newPara);
}

function removeElement() {
  const existingPara = document.getElementById("new-paragraph");
  if (existingPara) {
    existingPara.remove();
  } else {
    alert("No element to remove!");
  }
}
function changeText() {
  document.getElementById("info-text").textContent = "The text has been changed dynamically!";
}

function toggleStyle() {
  const title = document.getElementById("main-title");
  title.classList.toggle("highlight");
}

function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This paragraph was added dynamically!";
  newPara.id = "new-paragraph";
  document.getElementById("dynamic-content").appendChild(newPara);
}

function removeElement() {
  const existingPara = document.getElementById("new-paragraph");
  if (existingPara) {
    existingPara.remove();
  } else {
    alert("No element to remove!");
  }
}
