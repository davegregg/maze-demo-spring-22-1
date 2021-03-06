// With a project of this complexity or higher, I would already be looking for opportunities to separate some of this code into other files. Maybe we could have a file just for the "legend" and "mazeModel" objects, for example, since they are pure data and both represent the data model. So I might name that file "model.js" and load it first.

// Then, I might look at the maze creation process as another section of code which could be in a file called something like, "create-maze.js".

// I would continue like this until all the major aspects of my project have a well-named "home" and everything works again. But since you all observed me write the following code, I will leave it as it is.

const legend = {
  "▓": "wall",
  "░": "floor",
  "S": "start",
  "F": "finish",
}

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


const renderElement = function (className, parentElement) {
  const element = document.createElement("div") // <div class="--INSERT CLASS NAME HERE--"></div>
  element.classList.add(className)
  parentElement.append(element)

  return element
}


const mazeElement = document.querySelector("main")

// for (let rowIndex = 0; rowIndex < mazeModel.length; rowIndex += 1) {
for (const rowIndex in mazeModel) {
  const row = mazeModel[rowIndex]
  const rowElement = renderElement("row", mazeElement)

  // for (let cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
  for (const cellIndex in row) {
    const cell = row[cellIndex]
    const cellElement = renderElement("cell", rowElement)
    cellElement.dataset.cell = cellIndex
    
    const className = legend[cell]
    cellElement.classList.add(className)

    // switch (cell) {
    //   case legend.wall:
    //     cellElement.classList.add("wall")
    //     break

    //   case legend.floor:
    //     cellElement.classList.add("floor")
    //     break
      
    //   case legend.start:
    //     cellElement.classList.add("start")
    //     break

    //   case legend.finish:
    //     cellElement.classList.add("finish")
    //     break
    // }

    console.log({ rowIndex, row, cellIndex, cell })
  }
}

const renderPlayer = function () {
  const playerElement = document.createElement("img")
  playerElement.src = "./charmander.png"
  playerElement.classList.add("player")
  
  mazeElement
    .querySelector(".start")
    .append(playerElement)
}

renderPlayer()

const playerElement = mazeElement.querySelector(".player")

const validMovements = {
  ArrowRight: function () {
    const currentCell = playerElement.parentElement
    const nextCell = currentCell.nextElementSibling
    
    if (nextCell.classList.contains("wall") === false) {
      nextCell.append(playerElement)
    }
  },

  ArrowLeft: function () {
    const currentCell = playerElement.parentElement
    const prevCell = currentCell.previousElementSibling

    if (prevCell.classList.contains("wall") === false) {
      prevCell.append(playerElement)
    }
  },

  ArrowDown: function () {
    const currentCell = playerElement.parentElement
    const cellIndex = currentCell.dataset.cell

    const currentRow = currentCell.parentElement
    const nextRow = currentRow.nextElementSibling

    const nextCell = nextRow.children[cellIndex]

    if (nextCell.classList.contains("wall") === false) {
      nextCell.append(playerElement)
    }
  },

  ArrowUp: function () {
    const currentCell = playerElement.parentElement
    const cellIndex = currentCell.dataset.cell

    const currentRow = currentCell.parentElement
    const prevRow = currentRow.previousElementSibling

    const nextCell = prevRow.children[cellIndex]

    if (nextCell.classList.contains("wall") === false) {
      nextCell.append(playerElement)
    }
  },
}

document.addEventListener("keydown", (event) => {
  const movement = validMovements[event.key]
  
  if (movement !== undefined) {
    movement()
  }
})