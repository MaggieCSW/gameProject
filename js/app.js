
let gameQuestions = [ 
    {
        id:1,
        question:"this is the question 1",
        a:"that is correct!",
        b:"that is incorrect",
        c:"that is incorrect",
        d:"that is incorrect",
        answer:"a"
    },
    {
        id:2,
        question:"this is the question 2",
        a:"a better luck next time", 
        b:"b better luck next time",
        c:"c better luck next time",
        d:"d great job!",
        answer:"d"
    },
    {
        id:3,
        question:"this is the question 3",
        a:"a try again",
        b:"b you're on fire!",
        c:"c try again",
        d:"d try again",
        answer:"b"
    },
    {
        id:4,
        question:"this is the question 4",
        a:"a you'll get it next time",
        b:"b you'll get it next time",
        c:"look at you!",
        d:"you'll get it next time",
        answer:"c"
    },
    {
        id:5,
        question:"this is the question 5",
        a:"that is correct!",
        b:"you're wrong",
        c:"you're wrong",
        d:"you're wrong",
        answer:"a"
    }

];



// var questions = Math.floor(Math.random(questions.length) * 5) + 1;


// console.log(questions);

// let quiz = ["this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5"]

// quiz.forEach((output) => {
//     console.log(output);
// });

// function output(item, index, array) {
//     console.log(index, item);
// }

//   OR =>     quiz.forEach(function(item, index, array) {
//              console.log(index, item);
//              });

const startGame = () => {
    // when start game is clicked:
    // display question & 4 answers
    // allow user to select 1 of the 4 answers
    // if answer is correct, display message that the answer is correct
    // if answer is incorrect, display message that the player in incorrect

    // if answer is correct, display message 
    console.log('clicked') 
};

const playBtn = document.getElementById('playBtn')




playBtn.addEventListener('click', ()=> {
    startGame();
});

