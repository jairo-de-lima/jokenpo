const win = document.querySelector('.win')
const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')
const machineChoise = document.querySelector('.buttonMachine')


let humanScoreNumber = 0
let machineScoreNumber = 0

/*
humanScoreNumber -> Camel case
GAME_OPTIONS -> Snake case
*/
const GAME_OPTIONS = { // ENUMS
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoise) => {
    playTheGame(humanChoise, playMachine())
}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber]
}

const refreshScore = () => {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
}


const playTheGame = (human, machine) => {
    if (human === machine) {
        win.innerHTML = 'Deu Empate'
        result.src = './img/555.gif'
        result.width = 300;
        result.height = 200;

    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        win.innerHTML = 'Você Ganhou'
        result.src = './img/carlton.webp'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        win.innerHTML = 'Alexa Ganhou'
        result.src = './img/machine.webp'
    }

    if (humanScoreNumber === 5 || machineScoreNumber === 5) {
        if (humanScoreNumber === 5) {
            win.innerHTML = 'Parabens Grande Vencedor'
            result.src = './img/wintrofeu.gif'
            result.width = 300;
            result.height = 200;
            machineScore.innerHTML = 0
            humanScore.innerHTML = 0
        } else {
            win.innerHTML = 'Tu Perdeu Pra uma Maquina'
            result.src = './img/vcperdeu.gif'
            result.width = 300;
            result.height = 200;
            machineScore.innerHTML = 0
            humanScore.innerHTML = 0
        }
        refreshScore()

    }


}

