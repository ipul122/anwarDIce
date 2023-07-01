var randomNumber1 = Math.floor((Math.random() + 1) * 3.4);
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random() + 1) * 3.4);
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "HAHA SEMUA SERI";
  document
    .querySelector(".wp1 img")
    .setAttribute("src", "./images/icons8-winner-64.png");
  document
    .querySelector(".wp2 img")
    .setAttribute("src", "./images/icons8-winner-64.png");
} else if (randomNumber1 >= randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win ";
  document
    .querySelector(".wp1 img")
    .setAttribute("src", "./images/icons8-winner-64.png");
  document
    .querySelector(".wp2 img")
    .setAttribute("src", "./images/icons8-x-48.png");
} else {
  document
    .querySelector(".wp2 img")
    .setAttribute("src", "./images/icons8-winner-64.png");
  document.querySelector("h1").innerHTML = "Player 2 win ";
  document
    .querySelector(".wp1 img")
    .setAttribute("src", "./images/icons8-x-48.png");
}
