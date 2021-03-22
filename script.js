let randomNumber1 = 0;
let randomNumber2 = 0;
randomNumber1 = Math.floor(Math.random() * 6) + 1; //Rand num between 1-6 for image 1
randomNumber2 = Math.floor(Math.random() * 6) + 1; //Rand num between 1-6 for image 2


document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //change src of image1 accroding to random number
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //change src of image2 accroding to random number


if(randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").textContent = "🚩It's a Draw!🚩";
}
