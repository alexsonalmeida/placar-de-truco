"use strict";
const ourMarker = document.querySelector(".pontos1");
const theirMarker = document.querySelector(".pontos2");
let ourScore = 0;
let theirScore = 0;
function takePoints(isUs) {
    if (isUs) {
        if (ourScore === 0)
            console.log("já está um placar vazio");
        else {
            ourScore--;
            ourMarker.innerHTML = ourScore.toString();
        }
    }
    else {
        if (theirScore === 0)
            console.log("já está um placar vazio");
        else {
            theirScore--;
            theirMarker.innerHTML = theirScore.toString();
        }
    }
}
function addPoints(points, isUs) {
    if (isUs) {
        ourScore += points;
        if (ourScore >= 12)
            console.log("vencemos");
        else
            ourMarker.innerHTML = ourScore.toString();
    }
    else {
        theirScore += points;
        if (theirScore >= 12)
            console.log("eles venceram");
        else
            theirMarker.innerHTML = theirScore.toString();
    }
}
