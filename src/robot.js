'use strict';

class Robot {

  constructor() {
    this.bearing = "east"
    this.coordinates = [5, 5]
    this.tail = []
    this.tailLength = 6
    this.tail.push([this.coordinates[0], this.coordinates[1]])
    //this.app is set in app constructor
  }

  goToCoords(x, y) {
    if(x!==undefined && x<this.app.xboard && x>=0){
      this.coordinates[0] = x
    }else {
      this.youDied()
    }

    if(y!==undefined && y<this.app.yboard && y>=0) {
      this.coordinates[1] = y
    }else{
      this.youDied()
    }

    if(this.tail.find(coords => (coords.join(", ")===this.coordinates.join(", ")))) {
      this.youDied()
    }
  }

  youDied() {
    clearInterval(timer)
    window.alert("You died. :(")
    throw "you died"
  }

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
    this.tail.push([this.coordinates[0], this.coordinates[1]])
    if (this.coordinates[0]===this.app.candy[0] && this.coordinates[1]===this.app.candy[1]) {
      this.eatCandy()
    }
    if(this.tail.length > this.tailLength) {
      let removeCell = this.tail.shift()
      this.app.updateTailDisplay(removeCell)
    }
  }

  eatCandy() {
    this.tailLength += 2
    this.app.randomCandy()
  }

}
