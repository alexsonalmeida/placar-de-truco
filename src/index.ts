const ourMarker = document.querySelector(".pontos1") as HTMLBodyElement
const theirMarker = document.querySelector(".pontos2") as HTMLBodyElement
let ourScore = 0
let theirScore = 0

const takePoints = (isUs: boolean) => {
    if (isUs) {
        if (ourScore !== 0) {
           ourScore-- 
           ourMarker.innerHTML = ourScore.toString()     
        }
    } else {
        if (theirScore !== 0) {
           theirScore-- 
           theirMarker.innerHTML = theirScore.toString()
        }
    }
}

const addPoints = (points: number, isUs: boolean) => {
    if (isUs) {
        ourScore += points
        if (ourScore >= 12) {
            window.location.href = "./dist/pages/winner.html?ourScore=us"  
        }
        else ourMarker.innerHTML = ourScore.toString()
    } else {
        theirScore += points
        if (theirScore >= 12) {
            window.location.href = "./dist/pages/winner.html?ourScore=they" 
        }
        else theirMarker.innerHTML = theirScore.toString()       
    }
}