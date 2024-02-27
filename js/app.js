class Game {
    constructor() {
        this.gameQuestions = [ 
            {
                id:1,
                question:"What two countries were already involved in a military conflict before the beginning of World War II?",
                a:"Japan and China",
                b:"Korea and China",
                c:"Japan and Korea",
                d:"Russia and China",
                answer:"Japan and China"
            },
            {
                id:2,
                question:"What was the code name for the Battle of Normandy?",
                a:"Operation Spring Awakening",
                b:"Operation Fortitude",
                c:"Operation Barbarossa",
                d:"Operation Overlord",
                answer:"Operation Overlord"
            },
            {
                id:3,
                question:"What was the first Nazi concentration camp?",
                a:"Gross-Rosen",
                b:"Dachau",
                c:"Auschwitz",
                d:"Hinzert",
                answer:"Dachau"
            },
            {
                id:4,
                question:"What was the last major battle of World War II?",
                a:"Battle of the Bulge",
                b:"Battle of Stalingrad",
                c:"Battle of Okinawa",
                d:"Battle of the Atlantic",
                answer:"Battle of Okinawa"
            },
            {
                id:5,
                question:"Where was the first atom bomb tested?",
                a:"New Mexico",
                b:"California",
                c:"Arizona",
                d:"Texas",
                answer:"New Mexico"
            }
            
        ];

        // 'this' references the object that is executing the current function

        // Index

        this.idx = 0

        this.theQuestion = document.getElementById('theQuestion')

        // allows me to set different questions and answers to different values and to have different correct answers

        // set all to empty string
        // the inital value
        this.question = ''
        this.answerA = ''
        this.answerB = ''
        this.answerC = ''
        this.answerD = ''
        this.correctAnswer = ''  


        //grab elements
        this.playBtn = document.getElementById('playBtn')
        this.nextBtn = document.getElementById('nextBtn')

        this.answerAText = document.getElementById('answerAText')
        this.answerBText = document.getElementById('answerBText')    
        this.answerCText = document.getElementById('answerCText')    
        this.answerDText = document.getElementById('answerDText')
        this.answerText = document.querySelectorAll('.answer-text')

        this.answerBox = document.querySelectorAll('.answer-box')

        
    }
    
    // initializer... using to initialize functions

    init() {
        this.getData()
    }
    
    // start the game, start button disappears and questions appear

    startGame() {
        document.getElementById('section1').classList.add('d-none')
        document.getElementById('section2').classList.remove('d-none')
        document.getElementById('section3').classList.remove('d-none')
    }
    

    // passing in data and for each answer it's either correct or incorrect 

    nextQuestion() {
        this.getData()

        this.answerText.forEach(answer => {
            answer.classList.remove('correct')
            answer.classList.remove('incorrect')
        })


    }

    // randomizes questions

    getData() {
        let idx = Math.floor(Math.random() * this.gameQuestions.length)
        
        let data = this.gameQuestions[idx]
        
        // console.log(data)
        this.displayData(data)
    }

    

    // pulling all the data from the contructor and passing it into the empty strings

    // display argument
    // grabs the questions from obejects in the constructor with its matching set of answers 
    //changes the data "functional"
    displayData(data) {
        this.question = data.question
        this.answerA = data.a
        this.answerB = data.b 
        this.answerC = data.c 
        this.answerD = data.d
        this.correctAnswer = data.answer


        // displays/changes the text
        //innertext displays  "visual"
        this.theQuestion.innerText = this.question
        this.answerAText.innerText = this.answerA
        this.answerBText.innerText = this.answerB
        this.answerCText.innerText = this.answerC
        this.answerDText.innerText = this.answerD

        // event listener lets you click the correct answer
        this.answerText.forEach(answer => {
            answer.addEventListener('click', ()=> {
                this.selectAnswer(answer, this.correctAnswer)
            })
        })
        
        
        
    }

        
    // check for whether you got the answer right or wrong
    selectAnswer(answer, correctAnswer) {
        console.log(answer.innerText, correctAnswer)

        let isCorrect
        // is the inner text the same as the correct answer 
        if (answer.innerText == correctAnswer) {
            isCorrect = true
        } else {
            isCorrect = false
        }


        this.validateAnswer(isCorrect, answer)
        return isCorrect

        

    }

    // answer turns green if correct, answer turns red if incorrect
    // turns it green or red
    validateAnswer(result, ans) {
        console.log(result, ans)

        if (result) {
            ans.classList.add('correct')
        } else {
            ans.classList.add('incorrect')
        }

    }
    
    
}

// restarts when refreshed
// first event list restarts the game 
// second event list goes to next question   

const triviaGame = new Game() 

triviaGame.playBtn.addEventListener('click', ()=> {
    triviaGame.startGame()
    triviaGame.init() 
})

triviaGame.nextBtn.addEventListener('click', ()=> {
    triviaGame.nextQuestion()
})






// *************************************************************************************************

// ADD TO GAME:
// shuffle orders 
// next  button... remove the question and data associated w/question.. get rid of quest and add another one

// **************************************************************************************************

// when looped through all 5 questions, display 'end game'
// calculate how many out of 5 that the player got correct
// display scores on 'view scores'

// **************************************************************************************************

// create form so player can enter their name and name and score will be displayed in "view scores"