class App {
  constructor() {
    this.xboard = 50
    //when you change xboard, make sure to change CSS .box width %
    this.yboard = 25
    this.snake = new Robot()
    this.snake.app = this
    this.createBoard()
    this.snakeHeadCoords(this.snake.coordinates)
    //this.candy set in randomCandy()
  }

  createBoard() {
    for(let y=0; y<this.yboard; y++) {
      for(let x=0; x<this.xboard; x++) {
        const cell = document.createElement('div')
        cell.className = 'box'
        cell.id = `${x}-${y}`
        document.getElementById('play-board').append(cell)
      }
    }
    this.randomCandy()
  }

  randomCandy() {
    let x
    let y
    let inTail
    do {
      x = Math.floor(Math.random() * this.xboard)
      y = Math.floor(Math.random() * this.yboard)
      inTail = this.snake.tail.find(coords => (coords[0]===x && coords[1]===y))
    }while(inTail !== undefined)
    document.getElementById(`${x}-${y}`).style.background = "green"
    this.candy = [x, y]
  }

  //given [x, y]
  snakeHeadCoords(arr) {
    document.getElementById(`${arr[0]}-${arr[1]}`).style.background = "yellow"
  }

  moveSnake() {
    try {
      this.snake.advance()
    }catch(err) {
      console.log(err)
      return
    }
    this.snakeHeadCoords(this.snake.coordinates)
    this.showSnakeStats()
  }

  turnSnake(ev) {
    switch(ev.key) {
      case "ArrowUp":
        this.snake.turnNorth()
        break;
      case "ArrowDown":
        this.snake.turnSouth()
        break;
      case "ArrowLeft":
        this.snake.turnWest()
        break;
      case "ArrowRight":
        this.snake.turnEast()
        break;
      default:
        window.alert("Game paused")
    }
    this.snakeHeadCoords(this.snake.coordinates)
  }

  updateTailDisplay(removeCell) {
    document.getElementById(`${removeCell[0]}-${removeCell[1]}`).style.background = "black"
  }

  showSnakeStats() {
    let displayTail = ""
    this.snake.tail.forEach(cell => (displayTail+=`[${cell}] `))

    document.getElementById("stats-coordinates").innerHTML = `${this.snake.coordinates}`
    document.getElementById("stats-bearing").innerHTML = `${this.snake.bearing}`
    document.getElementById("stats-tail").innerHTML = `${displayTail}`
    document.getElementById("stats-candy").innerHTML = `${this.candy}`
  }

}
