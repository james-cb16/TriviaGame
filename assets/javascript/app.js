//List of Questions
var questions = [
    {
        question: "What is the most effective poke ball?",
        answers: ["Ultra Ball", "Timer Ball", "Master Ball", "Great Ball"],
        correctAnswer: "Master Ball"
    },
    {
        question: "What type are electric pokemon strong against?",
        answers: ["Ground", "Fire", "Water", "Grass"],
        correctAnswer: "Water"
    },
    {
        question: "What is the name of the second gym leader in Pokemon Fire Red?",
        answers: ["Roxanne", "Brock", "Lydia", "Misty"],
        correctAnswer: "Misty"
    },
    {
        question: "Which type is weak against Ghost type pokemon?",
        answers: ["Psychic", "Normal", "Dark", "Rock"],
        correctAnswer: "Psychic"
    },
    {
        question: "What is the name of the pokemon that evoles into Pikachu?",
        answers: ["Raichu", "Pichu", "Pikachu", "Eevee"],
        correctAnswer: "Pichu"
    },
    {
        question: "In the game, which move allows you to travel through the ocean?",
        answers: ["Dive", "Fly", "Surf", "Dig"],
        correctAnswer: "Surf"
    },
    {
        question: "Which of these is NOT a legendary pokemon from the Hoenn region?",
        answers: ["Latios", "Rayquaza", "Groudon", "Entei"],
        correctAnswer: "Entei"
    },
    {
        question: "What is the name of the third gym leader in Pokemon Emerald?",
        answers: ["Winona", "Tabitha", "Watson", "Brawly"],
        correctAnswer: "Watson"
    }
];

var quizArea = $("#content-area")

var timer;

//Game Functions
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    timecounter: function () {
        game.counter--;
        $("#time-left").html(game.counter)
        if (game.counter === 0) { //End game once counter reaches 0
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.timecounter, 1000);

        $("#start").remove();

        $("#counter-area").prepend("<h2>Time Remaining: <span id='time-left'>120</span> Seconds</h2>");

        for (var i = 0; i < questions.length; i++) {
            //Append each question from the questions array
            quizArea.append("<h3>" + questions[i].question + "</h3>");

            //Append input and each answer from answers array, from each question
            for (var j = 0; j < questions[i].answers.length; j++) {
                quizArea.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

    }

}

// Click Functions

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});
