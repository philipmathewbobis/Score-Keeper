const select = document.querySelector('select')

const plusBtn1 = document.querySelector('#player-1-btn')
const plusBtn2 = document.querySelector('#player-2-btn')
const rstButton = document.querySelector('#reset-btn')
let points = 1
const player1Score = document.querySelector('#player-1')
const player2Score = document.querySelector('#player-2')

let winningScore = 5,updatePlayer1 = 0,updatePlayer2 = 0;


select.addEventListener('change', function (e) {
    if (parseInt(player1Score.innerText) >= parseInt(select.value) || parseInt(player2Score.innerText) >= parseInt(select.value)){
        alert("You cannot change the points to win.")
        resetToDefault()
        return
    }else {
        winningScore = parseInt(select.value)
    }
})

plusBtn1.addEventListener('click', function (e){
    if (winningScore % 2 === 0) {
        alert("Select a number of playing to points in odd number.")
        return
    }
    updatePlayer1 += points
    player1Score.innerText = updatePlayer1
    gameWinner()
})

plusBtn2.addEventListener('click', function (e){
    if (winningScore % 2 === 0) {
        alert("Select a number of playing to points in odd number.")
        return
    }
    updatePlayer2 += points
    player2Score.innerText = updatePlayer2
    gameWinner()
})

// function to check who is the winner
function gameWinner(){
    if (updatePlayer1 === winningScore){
        player1Score.classList.add('text-green-600')
        player2Score.classList.add('text-red-600')

        plusBtn1.classList.add('bg-green-400')
        plusBtn2.classList.add('bg-blue-400')

        plusBtn1.classList.remove('hover:bg-green-700')
        plusBtn2.classList.remove('hover:bg-blue-700')

        plusBtn1.setAttribute('disabled','')
        plusBtn2.setAttribute('disabled','')
    } else if (updatePlayer2 === winningScore){
        player2Score.classList.add('text-green-600')
        player1Score.classList.add('text-red-600')

        plusBtn1.classList.add('bg-green-400')
        plusBtn2.classList.add('bg-blue-400')

        plusBtn1.classList.remove('hover:bg-green-700')
        plusBtn2.classList.remove('hover:bg-blue-700')

        plusBtn1.setAttribute('disabled','')
        plusBtn2.setAttribute('disabled','')
    }
}

// Reset button event listener
rstButton.addEventListener('click', resetToDefault)

const theme = document.querySelector('#theme')

theme.addEventListener('click', function(){
    document.documentElement.classList.toggle('dark')
})

function resetToDefault(){
    // Reset all from the default values
    updatePlayer1 = 0
    updatePlayer2 = 0

    player1Score.innerText = 0
    player2Score.innerText = 0

    plusBtn1.classList.remove('bg-green-400')
    plusBtn2.classList.remove('bg-blue-400')
    plusBtn1.classList.add('hover:bg-green-700')
    plusBtn2.classList.add('hover:bg-blue-700')

    player1Score.classList.remove('text-green-600')
    player1Score.classList.remove('text-red-600')
    player2Score.classList.remove('text-green-600')
    player2Score.classList.remove('text-red-600')


    plusBtn1.removeAttribute('disabled')
    plusBtn2.removeAttribute('disabled')
}