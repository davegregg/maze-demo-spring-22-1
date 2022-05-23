const WALL = "▓"
const FLOOR = "░"
const START = "S"
const FINISH = "F"

const mazeModel = [
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓░░░▓░░░░░▓░░░░░▓░░░▓",
  "▓░▓░▓░▓▓▓░▓▓▓▓▓░▓░▓▓▓",
  "▓░▓░▓░░▓░░░░░░▓░▓░░░▓",
  "▓░▓▓▓▓▓▓▓░▓░▓▓▓░▓░▓░▓",
  "▓░░░░░░░░░▓░░░░░▓░▓░▓",
  "▓░▓▓▓░▓▓▓▓▓░▓▓▓▓▓░▓░▓",
  "▓░▓░░░▓░░░▓░▓░░░░░▓░▓",
  "▓░▓▓▓▓▓░▓░▓░▓░▓▓▓░▓░F",
  "S░░░░░▓░▓░▓░▓░▓░▓░▓▓▓",
  "▓▓▓▓▓░▓░▓░▓░▓░▓░▓░▓░▓",
  "▓░░░░░▓░▓░▓░░░▓░▓░▓░▓",
  "▓░▓▓▓▓▓▓▓░▓▓▓▓▓░▓░▓░▓",
  "▓░░░░░░░▓░░░░░░░▓░░░▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓"
]

const mazeElement = document.querySelector("main")

for (let rowIndex = 0; rowIndex < mazeModel.length; rowIndex += 1) {
  const row = mazeModel[rowIndex]
  const rowElement = document.createElement("div") // <div class="row"></div>
  rowElement.classList.add("row")
  mazeElement.append(rowElement)

  for (let cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
    const cell = row[cellIndex]
    const cellElement = document.createElement("div") // <div class="cell"></div>
    cellElement.classList.add("cell")
    rowElement.append(cellElement)

    if (cell === WALL) {
      cellElement.classList.add("wall")
    } else if (cell === FLOOR) {
      cellElement.classList.add("floor")
    } else if (cell === START) {
      cellElement.classList.add("start")
    } else if (cell === FINISH) {
      cellElement.classList.add("finish")
    }

    console.log({ rowIndex, row, cellIndex, cell })
  }
}
