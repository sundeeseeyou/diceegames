let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let diceImageSrc1 = "./images/dice" + randomNumber1 + ".png";
let diceImageSrc2 = "./images/dice" + randomNumber2 + ".png";

//setAttributes of the images

let image1 = document.querySelector(".img1").setAttribute("src",diceImageSrc1);
let image2 = document.querySelector(".img2").setAttribute("src",diceImageSrc2);
let setVictory = document.querySelector("h1");

//the conditional for who got the bigger dice 

if( randomNumber1 > randomNumber2){
    setVictory.textContent = "🚩 Player 1 Won!";
} else if (randomNumber1 < randomNumber2){
    setVictory.textContent = "Player 2 Won! 🚩";
} else {
    setVictory.textContent = "Draw!";
}