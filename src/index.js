window.onload = function() {

  const app = new App
  app.showSnakeStats()
  window.addEventListener('keydown', app.turnSnake.bind(app))

  timer = setInterval(app.moveSnake.bind(app), 100)


//     ev.key
// "ArrowUp"
// ev.which
// 38
// ev.key
// "ArrowLeft"
// ev.which
// 37
// ev.key
// "ArrowRight"
// ev.which
// 39
// ev.key
// "ArrowDown"
// ev.which
// 40



}
