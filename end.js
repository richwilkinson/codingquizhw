//variable selecting ids from html
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
//variable for storage in local storage
const mostRecentScore = localStorage.getItem('mostRecentScore')

//storing score from test in local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

//variables for high score limit
const MAX_HIGH_SCORES = 5

//appends final score to id
finalScore.innerText = mostRecentScore

//event listener for a key pressed in order for save button to work
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

//button for save high score
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

//pushes score to highscore list
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)
//stores high in storage and returns to highcore window
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('highscore.html')

    
}