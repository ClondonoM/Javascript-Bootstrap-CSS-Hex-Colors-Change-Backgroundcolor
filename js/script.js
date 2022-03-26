var max = 9;
var min = 0;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //console.log(color, changeNumid());
  return color;
}

function changeColor() {
  var numid = changeNumid();
  var div = document.getElementById(`backg-${numid}`);
  div.style.backgroundColor = getRandomColor();
}

function changeNumid() {
  var x = Math.floor(Math.random() * (max - min) + min);
  return x;
}

setInterval(changeColor, 1000);
