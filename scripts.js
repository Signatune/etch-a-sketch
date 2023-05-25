let sketchBoard = document.querySelector(".sketch-board");

let gridSize = 50;

for (let row = 0; row < gridSize; row++) {
  let row = document.createElement("div");
  row.classList.add("board-row");
  sketchBoard.appendChild(row);
  for (let cell = 0; cell < gridSize; cell++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);

    cell.addEventListener("click", (event) => {
      cell.classList.add("filled");
    });
  }
}
