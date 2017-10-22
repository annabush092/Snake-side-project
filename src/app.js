class App {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  setTableSize() {
    const smaller = ""
    if(this.width < this.height) {
      smaller = this.width
    }else {
      smaller = this.height
    }
  }

  createEmptyEl() {
    const empty = document.createElement('img')
    empty.className = 'empty'
    empty.src = './images/empty-square.jpg'
    return empty
  }

  fillTable() {
    document.querySelectorAll('td').forEach(cell => cell.append(this.createEmptyEl()))
  }

  placeMonster() {
    const monster = document.createElement('img')
    monster.id = 'monster'
    monster.src = './images/cute-monster.jpg'
    document.getElementById('cell-1-1').append(monster)
  }

}
