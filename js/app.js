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

        this.idx = 0

        this.theQuestion = document.getElementById('theQuestion')
        this.question = ''
        this.answerA = ''
        this.answerB = ''
        this.answerC = ''
        this.answerD = ''
        this.correctAnswer = ''  

        this.playBtn = document.getElementById('playBtn')
        this.nextBtn = document.getElementById('nextBtn')

        this.answerAText = document.getElementById('answerAText')
        this.answerBText = document.getElementById('answerBText')    
        this.answerCText = document.getElementById('answerCText')    
        this.answerDText = document.getElementById('answerDText')
        this.answerText = document.querySelectorAll('.answer-text')

        this.answerBox = document.querySelectorAll('.answer-box')
    }
    
    
    init() {
        this.getData()
    }
    
    startGame() {
        document.getElementById('section1').classList.add('d-none')
        document.getElementById('section2').classList.remove('d-none')
        document.getElementById('section3').classList.remove('d-none')
    }
    
    nextQuestion() {
        this.getData()

        this.answerText.forEach(answer => {
            answer.classList.remove('correct')
            answer.classList.remove('incorrect')
        })


    }
    getData() {
        let idx = Math.floor(Math.random() * this.gameQuestions.length)
        
        let data = this.gameQuestions[idx]
        
        // console.log(data)
        this.displayData(data)
    }
    
    displayData(data) {
        this.question = data.question
        this.answerA = data.a
        this.answerB = data.b 
        this.answerC = data.c 
        this.answerD = data.d
        this.correctAnswer = data.answer



        
        this.theQuestion.innerText = this.question
        this.answerAText.innerText = this.answerA
        this.answerBText.innerText = this.answerB
        this.answerCText.innerText = this.answerC
        this.answerDText.innerText = this.answerD

        
        this.answerText.forEach(answer => {
            answer.addEventListener('click', ()=> {
                this.selectAnswer(answer, this.correctAnswer)
            })
        })
        
        
        
    }

    selectAnswer(answer, correctAnswer) {
        console.log(answer.innerText, correctAnswer)

        let isCorrect

        if (answer.innerText == correctAnswer) {
            isCorrect = true
        } else {
            isCorrect = false
        }


        this.validateAnswer(isCorrect, answer)
        return isCorrect

        

    }

    

    validateAnswer(result, ans) {
        console.log(result, ans)

        if (result) {
            ans.classList.add('correct')
        } else {
            ans.classList.add('incorrect')
        }

    }
    
    
}


// ************************************************************** 
        // if(this.answerBox == isCorrect) {
        //     classList.add('correct')
        // } else {
        //     classList.add('incorrect')
        // }
        // return('correct')
// ******************************************************
        // if (selection == this.answerBox) {
        //     this.correct.classList.add('d-none')
        // } else {
        //     this.correct.classList.remove('d-none')
        // }


        // div is called answerBox
    
    

    // selection == this.answerbox



// Next.... let the correct answer light up green
// If incorrect answer is selected, let answer selection change to red and the correct answer change to green


// Then... click next button and have the next question appear









// for next  button you will need to remove the question and data associated w/question.. get rid of quest and add another one
// className



// when answer that is selected is correct, change the color of the div to green

// when answer that is selected is incorrect, change color of the div to red

// div is called answer-box (we named it this.answerBox in javascript)









// ************************** ADDED BELOW ON THURSDAY ********************************************************************


// const nextBtn = document.getElementById('nextBtn')

// nextBtn.addEventListener('click', ()=> (this.quest

// const selectAnswer =()=> {
//     let selectedAnswer
//     const answerText = document.querySelectorAll('.answer-text')
//     // console.log(answerText)

//     answerText.forEach(answer => {
//         answer.addEventListener('click', ()=> {
//             selectedAnswer = answer.innerText
//             console.log(selectedAnswer)
//         })
//     })

// }

// selectAnswer()

// function correct() {
    
// }



// *************************************************************************************************************************









// ************************** Trying with radio buttons in html  ***************************************
// function collectUserAnswers() {
//     const answerText = [];

//     // Assuming radio buttons are used for single-choice questions
//     const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    
//     radioButtons.forEach((radioButton) => {
//     answerText.push(radioButton.value);
//     });

//     return answerText;
// }

// function checkAnswers() {
//     const userAnswers = collectUserAnswers();
//     let score = 0;
  
//     userAnswers.forEach((userAnswer, index) => {
//       if (userAnswer === quizData[index].correctAnswer) {
//         score++;
//       }
//     });
  
//     alert(`You scored ${score} out of ${quizData.length}!`);
//   }

// *****************************************************************************************

    // shuffle orders

    // ***************** commented out below
    // shuffle() {

    // }

    // method for getting right answer

    // ************** commented out below
    // correct() {
    //     this.correctAnswer = this.gameQuestions.answer
    // }

    
    //  ***************************************************

//  SELECT AN ANSWER.....


    // ****************************************************
    

const triviaGame = new Game() 

// triviaGame.init()

triviaGame.playBtn.addEventListener('click', ()=> {
    triviaGame.startGame()
    triviaGame.init()
})

triviaGame.nextBtn.addEventListener('click', ()=> {
    triviaGame.nextQuestion()
})