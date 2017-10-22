'use strict';

const allDirections = ['north', 'east', 'south', 'west']

class Robot {

  constructor() {
    this.bearing = "east"
    this.coordinates = [15, 15]
    //this.app is set by app constructor
  }

  orient(direction) {
    if(allDirections.includes(direction.toLowerCase())) {
      this.bearing = direction
    }else{
      throw new Error("Invalid Robot Bearing")
    }
  }

  goToCoords(x, y) {
    if(x!==undefined && x<50 && x>=0){
      this.coordinates[0] = x
    }else {
      // if(x>=50 || x<0)
      this.youDied()
    }

    if(y!==undefined && y<35 && y>=0) {
      this.coordinates[1] = y
    }else{
      //  if(x>=30 || x<0)
      this.youDied()
    }
  }

  youDied() {
    clearInterval(timer)
    window.alert("You died. :(")
    throw "you died"
  }

  //given { x: int, y: int, direction: string }
  place(params) {
    this.goToCoords(params.x, params.y)
    this.orient(params.direction)
  }

  // //helper method for turnRight() and turnLeft()
  // generateNewDir(change) {
  //   let i = allDirections.findIndex(d => (d === this.bearing))
  //   let newI = i + change
  //   if(newI<0) {
  //     newI = 3
  //   }else if(newI > 3) {
  //     newI = 0
  //   }
  //   this.bearing = allDirections[newI]
  //   // console.log("Changed Direction.")
  //   // console.log("coordinates: ", this.coordinates[0], ', ', this.coordinates[1])
  //   // console.log("direction: ", this.bearing)
  // }

  turnEast() {
    if(this.bearing !== 'west') {
      this.bearing = "east"
    }
  }

  turnWest() {
    if(this.bearing !== 'east') {
      this.bearing = 'west'
    }
  }

  turnNorth() {
    if(this.bearing !== 'south') {
      this.bearing = 'north'
    }
  }

  turnSouth() {
    if(this.bearing !== 'north') {
      this.bearing = 'south'
    }
  }

  advance() {
    switch(this.bearing) {
      case "north":
        this.goToCoords(this.coordinates[0], --this.coordinates[1])
        break
      case "east":
        this.goToCoords(++this.coordinates[0], this.coordinates[1])
        break
      case "south":
        this.goToCoords(this.coordinates[0], ++this.coordinates[1])
        break
      case "west":
        this.goToCoords(--this.coordinates[0], this.coordinates[1])
        break
    }
  }

  // advance() {
  //   switch(this.bearing) {
  //     case "north":
  //       this.coordinates[1]++
  //       break
  //     case "east":
  //       this.coordinates[0]++
  //       break
  //     case "south":
  //       this.coordinates[1]--
  //       break
  //     case "west":
  //       this.coordinates[0]--
  //       break
  //   }
  //   // console.log("Advanced one space.")
  //   // console.log("coordinates: ", this.coordinates[0], ', ', this.coordinates[1])
  //   // console.log("direction: ", this.bearing)
  // }
  //
  // interpretInstructions(str) {
  //   const instructionArr = []
  //   str.split("").forEach(function (char) {
  //     switch(char) {
  //       case "L":
  //         instructionArr.push("turnLeft")
  //         break
  //       case "R":
  //         instructionArr.push("turnRight")
  //         break
  //       case "A":
  //         instructionArr.push("advance")
  //         break
  //     }
  //   })
  //   return instructionArr
  // }
  //
  // evaluateInstructions(str) {
  //   this.interpretInstructions(str).forEach(fxnString => {
  //     // console.log(fxnString)
  //     this[fxnString]()
  //   })
  // }

}
