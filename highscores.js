//variables set to select ids from html
const highScoresList = document.querySelector('#highScoresList')
//stores score and name in local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
//appends user input on highscore list
highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")