class App {
  constructor() {
    this.snake = new Robot()
    this.snake.app = this
    this.createBoard()
    this.placeRobot(this.snake.coordinates)
  }

  createBoard() {
    for(let y=0; y<35; y++) {
      for(let x=0; x<50; x++) {
        const cell = document.createElement('div')
        cell.className = 'box'
        cell.id = `${x}-${y}`
        document.getElementById('play-board').append(cell)
      }
    }
  }

  //given [x, y]
  placeRobot(arr) {
    document.getElementById(`${arr[0]}-${arr[1]}`).style.background = "yellow"
  }

  moveSnake() {
    try {
      this.snake.advance()
    }catch(err) {
      console.log(err)
      return 
    }
    this.placeRobot(this.snake.coordinates)
    this.showSnakeStats()
  }

  keyPressed(ev) {
    if(ev.which === 32) {
      console.log("Spacebar event happened")
      // this.timer = setInterval(this.moveSnake, 1000)
      // debugger
    } else {
      this.turnSnake(ev)
    }
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
    this.placeRobot(this.snake.coordinates)
  }


  makeTail(x, y) {
    document.getElementById(`${x}-${y}`).style.background = "green"
  }

  showSnakeStats() {
    document.getElementById("stats-coordinates").innerHTML = `${this.snake.coordinates}`
    document.getElementById("stats-bearing").innerHTML = `${this.snake.bearing}`
  }

}
