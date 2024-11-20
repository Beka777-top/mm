var totalDistance = 0;
const Find = () =>{
    while (true) {
      var distance = +prompt("kashictic engiz");
      if (distance == 0) {
        break;
      }
      var unit = prompt("olshem birlic engiz m, dm, km");
      if (unit == "m") {
        totalDistance += distance;
      } else if (unit == "dm") {
        totalDistance += distance / 10;
      } else if (unit == "km") {
        totalDistance += distance * 1000;
      }
    }
    return totalDistance
}
console.log(Find());
