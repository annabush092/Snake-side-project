'use strict';

const allDirections = ['north', 'east', 'south', 'west']

class Robot {

  constructor() {
    this.bearing = "north"
    this.coordinates = [0, 0]
  }

  orient(direction) {
    if(allDirections.includes(direction.toLowerCase())) {
      this.bearing = direction
    }else{
      throw new Error("Invalid Robot Bearing")
    }
  }

  goToCoords(x, y) {
    if(x !== undefined){
      this.coordinates[0] = x
    }
    if(y !== undefined) {
      this.coordinates[1] = y
    }
  }

  //given { x: int, y: int, direction: string }
  place(params) {
    this.goToCoords(params.x, params.y)
    this.orient(params.direction)
  }

  //helper method for turnRight() and turnLeft()
  generateNewDir(change) {
    let i = allDirections.findIndex(d => (d === this.bearing))
    let newI = i + change
    if(newI<0) {
      newI = 3
    }else if(newI > 3) {
      newI = 0
    }
    this.bearing = allDirections[newI]
    // console.log("Changed Direction.")
    // console.log("coordinates: ", this.coordinates[0], ', ', this.coordinates[1])
    // console.log("direction: ", this.bearing)
  }

  turnRight() {
    this.generateNewDir(1)
  }

  turnLeft() {
    this.generateNewDir(-1)
  }

  advance() {
    switch(this.bearing) {
      case "north":
        this.coordinates[1]++
        break
      case "east":
        this.coordinates[0]++
        break
      case "south":
        this.coordinates[1]--
        break
      case "west":
        this.coordinates[0]--
        break
    }
    // console.log("Advanced one space.")
    // console.log("coordinates: ", this.coordinates[0], ', ', this.coordinates[1])
    // console.log("direction: ", this.bearing)
  }

  interpretInstructions(str) {
    const instructionArr = []
    str.split("").forEach(function (char) {
      switch(char) {
        case "L":
          instructionArr.push("turnLeft")
          break
        case "R":
          instructionArr.push("turnRight")
          break
        case "A":
          instructionArr.push("advance")
          break
      }
    })
    return instructionArr
  }

  evaluateInstructions(str) {
    this.interpretInstructions(str).forEach(fxnString => {
      // console.log(fxnString)
      this[fxnString]()
    })
  }

}
