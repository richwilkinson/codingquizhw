const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let timer = 75

const timerSelect = document.querySelector('#timerSelect')

let setInt 

console.log(timerSelect)


let questions = [
    {
        question: 'What does HTML stand for ?',
        choice1: 'Hot TaMaLe',
        choice2: 'High Tech Master Linguistics',
        choice3: 'Hacked Text Messages Link',
        choice4: 'Hyper Text Markup Language',
        answer: 4,
    },
    {
        question:
        "What does CSS stand for ?",
        choice1: "Computer Style Syndicate",
        choice2: "Cascading Style Sheets",
        choice3: "Chicken Steak Shrimp",
        choice4: "None of the above",
        answer: 2,
    },
    {
        question: "What is another name for Javascript ?",
        choice1: "LiveScript",
        choice2: "ECMAScript",
        choice3: "JScript",
        choice4: "All of the Above",
        answer: 4,
    },
    {
        question: "Where is it best to put script tags ?",
        choice1: "in the head",
        choice2: "anywhere in the body",
        choice3: "after html in the body",
        choice4: "does not matter",
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    timerSelect.innerText = timer;
    setInt = setInterval (decreaseTime, 1000) 
        
    
}

decreaseTime = () => {
    timer--
    timerSelect.innerText = timer;
}



getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()