const container = document.querySelector(".container");

const blackBtn = document.querySelector(".black");

const eraserBtn = document.querySelector(".eraser");
let isBlack = true;
//black

blackBtn.addEventListener("click", () => {
  let color = "black";
  setColor(color);
});
//eraser
eraserBtn.addEventListener("click", () => {
  let color = "eraser";
  setColor(color);
});
sizingGrid(16);
creatingDivs(16);
function sizingGrid(grid) {
  container.style.setProperty("--grid-rows", grid);
  container.style.setProperty("--grid-cols", grid);
}

gridSize.addEventListener("click", function () {
  let size = prompt("Grid size? 0-64");
  if (size > 64) {
    delGrid();
    sizingGrid(16);
    creatingDivs(16);
    return alert("Please enter a number below 64");
  }
  delGrid();
  sizingGrid(size);
  creatingDivs(size);
});
function delGrid() {
  container.innerHTML = "";
}
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function creatingDivs(grid) {
  for (let i = 0; i < grid * grid; i++) {
    let divs = document.createElement("div");
    divs.classList.add("divs");
    container.appendChild(divs);
  }
}

function setColor(color) {
  const divs = document.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", function (e) {
      if (color == "black") {
        e.target.style.backgroundColor = "black";
      } else {
        e.target.style.backgroundColor = "#F9F7FF";
      }
    });
  }
}
