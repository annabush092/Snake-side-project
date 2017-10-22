window.onload = function() {

  const app = new App
  app.fillTable()

  function showRobotStats() {
    const myRobot = new Robot()
    myRobot.place({x: 8, y: 4, direction: "south"})
    const html = `<ul>Robot Stats: <li>coordinates: ${myRobot.coordinates}</li><li>bearing: ${myRobot.bearing}</li></ul>`
    document.getElementById("robot-stats").innerHTML = html
  }

}
