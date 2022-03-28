let max = 9,
  min = 0;

function getRandomColor() {
  let letters = "0123456789ABCDEF",
    color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //console.log(color, changeNumid());
  document.getElementById(`backg-${changeNumid()}`).innerHTML = color;
  return color;
}

function changeColor() {
  let numid = changeNumid(),
    div = document.getElementById(`backg-${numid}`);
  div.style.backgroundColor = getRandomColor();
}

function changeNumid() {
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
}

setInterval(changeColor, 1000);
