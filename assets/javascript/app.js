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

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
