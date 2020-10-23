const question = document.querySelector('#question');
const choice = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let newQuestion = {}
let rightAnswer = true
let score = 0
let questionCounter = 0
let availQuestion = []

let questions = [
   
    {question: "What does HTML stand for ?",
    choice1: 'Hot TaMaLe',
    choice2: 'High Tech Mock Learning',
    choice3: 'Hyper Text Markup Language',
    choice4: 'High Transitional Modal Length',
    answer: 3,},
   

   {question: "What does CSS stand for ?",
    choice1: 'Cascading Style Sheets',
    choice2: 'Cool Students Surfing',
    choice3: 'Computed Syndicated Styles',
    choice4: 'Color Style Syntax',
    answer: 1,},
    

    
    {question: "What is another name for Javascript ?",
    choice1: 'Confusing',
    choice2: 'Java',
    choice3: 'Collection of Random Words',
    choice4: 'ECMAScript',
    answer: 4,},



    {question: "Is it better to script tags at the head or bottom of the body ?",
    choice1: 'Head',
    choice2:'Does not matter',
    choice3: 'Bottom of the body',
    choice4: 'Tacos',
    answer: 3,}

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4
