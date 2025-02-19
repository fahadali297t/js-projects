let dice = document.querySelector(".dice")
const roll = document.querySelector(".btn--roll")
const reset = document.querySelector(".btn--new")
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const activeText0 = document.querySelector(".active_text0")
const activeText1 = document.querySelector(".active_text1")

let score0El = document.querySelector("#score--0")
let score1EL = document.querySelector("#score--1")
let score0 = 0
let score1 = 0

let active = 0
player0.classList.add('player--active')
// 
roll.addEventListener('click' , ()=>{
    dice.classList.remove('hidden')
    let dice_num = Math.floor((Math.random()*6) +1)
    dice.src = `./assets/dice-${dice_num}.png`
    if(active === 0){
        switch(dice_num){
            case 1 :{
                score0 += 1

                break;
            }
            case 2 :{
                score0 +=2

                break;
            }
            case 3 :{
                score0 += 3

                break;
            }
            case 4 :{
                score0 += 4

                break;
            }
            case 5 :{
                score0 += 5

                break;
            }
            case 6 :{
                score0 += 6

                break;
            }
        }
        player1.classList.add('player--active')
        player0.classList.remove('player--active')
        activeText0.classList.add('hidden')
        activeText1.classList.remove('hidden')

        active = 1;
    }else{
        switch(dice_num){
            case 1 :{
                score1 += 1

                break;
            }
            case 2 :{
                score1 +=2

                break;
            }
            case 3 :{
                score1 += 3

                break;
            }
            case 4 :{
                score1 += 4

                break;
            }
            case 5 :{
                score1 += 5

                break;
            }
            case 6 :{
                score1 += 6

                break;
            }
        }
        active = 0
        player0.classList.add('player--active')
        player1.classList.remove('player--active')
        activeText1.classList.add('hidden')
        activeText0.classList.remove('hidden')

    }

    console.log(active)
    score0El.textContent = score0
    score1EL.textContent = score1

    if(score0>=100){
        alert("player 0 has won the game")
    }else if(score1>=100){
        alert("player 1 has one the game")
    }
})

reset.addEventListener('click' , ()=>{
    dice.classList.add('hidden')
    score0 = 0
    score1 = 0
    active = 0
    player0.classList.add('player--active')
    score0El.textContent = score0
    score1EL.textContent = score1
})