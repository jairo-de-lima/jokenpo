const win = document.querySelector('.win')
const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoise) => {


    playTheGame(humanChoise, playMachine())
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
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
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
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

    if (humanScoreNumber === 3 || machineScoreNumber === 3) {
        if (humanScoreNumber === 3) {
            win.innerHTML = 'Parabens Grande Vencedor'
            result.src = './img/wintrofeu.gif'
            machineScore.innerHTML = 0
            humanScore.innerHTML = 0
        } else {
            win.innerHTML = 'Tu Perdeu Pra uma Maquina'
            result.src = './img/vcperdeu.gif'
            machineScore.innerHTML = 0
            humanScore.innerHTML = 0
        }
        refreshScore()

    }


}

