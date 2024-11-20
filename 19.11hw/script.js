let num = 49;
function numSan() {
  while (true) {
    const san = +prompt("1 ден 100ге дейынгы санды жазып купия созы табыныз");
    if (san === num) {
      alert("Жарайсыз! Сіз құпия санды таптыңыз!");
      break;
    } else if (san < num) {
      alert("Құпия сан үлкенірек!");
    } else {
      alert("Құпия сан кішірек!");
    }
  }
}
console.log(numSan());