$(document).ready(function() {

    //create an object that holds all questions and answer information
    var questions = {
        zero: {
            question: ["Most of us have played Atari games. What does Atari mean?"],
            answers: ["Success", "Fun", "Attach", "Joy"],
            correct: "Success"
        },
        one: {
             question: "What does Mario jump on after completing a level?",
            answers: ["Mystery Block", "Flag Pole", "Coin Block", "Pyramid"],
            correct: "Flag Pole"
        },
    
          two: {
         	question: "What does NES stand for?",
            answers: ["Nintendo Everyday System", "Nintendo Evolve System", "Nintendo Entertainment System", "Nintendo's Early System"],
            correct: "Nintendo Entertainment System"
        },
    
          three: {
             question: "In what year was Playstation released?",
            answers: ["1993", "1994", "1995", "1996"],
            correct: "1994"
        },
    
          four: {
             question: "What is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?",
            answers: ["Princess Apple", "Princess Berry", "Princess Pie", "Princess Peach"],
            correct: "Princess Peach"
        },
    
          five: {
             question: "What is the all-time highest grossing video game?",
            answers: ["Grand Theft Auto", "Call of Duty", "World of Warcraft", "Fortnite"],
            correct: "World of Warcraft"
        },
    
          six: {
             question: "What year was Sega Genesis released in North America?",
            answers: ["1987", "1988", "1989", "1990"],
            correct: "1989"
        },
    
          seven: {
             question: "What was Nintendo's first video game?",
            answers: ["EVR Race", "Donkey Kong", "Mario", "Kung Fu"],
            correct: "EVR Race"
        },
    
          eight: {
             question: "What was the Atari 2600's best selling game?",
            answers: ["Asteroids", "Pac-Man", "Space Invaders", "Pong"],
            correct: "Pac-Man"
        },
    
          nine: {
             question: "Approximately how many units of the first Xbox did Microsoft sell?",
            answers: ["13 million", "24 million", "53 million", "77milion"],
            correct: "24 million"
        },
    };
    console.log(questions);

    // Create a .on("click") event to make CLICK HERE TO START a button to start the game
    $(document).on("click", ".start", setup);
    
    //create divs to contain information
    var rightDiv = $("<div class='rightAns'></div>");
    var timerDiv = $("<div class='countdown'><h3></h3></div>");
    var questionDiv = $("<div class='question'><h3></h3></div>");
    var answerDiv = $("<div class='answers'></div>");
    
    //create object keys to return the questions in order
    var keys = Object.keys(questions);
    console.log(keys);
    var key = keys[n];
    var time = 60;
    console.log(time);
    var n = 0;
    console.log(n);
    
    //create a function with reset and game setup
    function setup() {
        $(".start").css("display", "none");
    
        var correct = 0;
        var incorrect = 0;
        var timeout = 0;
        n = 0;
        key = keys[n];
    
        var reset = function() {
            time = 60;
            $(".rightAns").empty();
            $(".rightAns").remove();
            $(".main").append(timerDiv);
            $(".countdown h3").html("TIME REMAINING: " + time);
            $(".main").append(questionDiv);
            $(".main").append(answerDiv);
            console.log("reset")
        }
    
    reset();
    
    //create a function to begin showing questions and messages that follow
    function showQA() {
        $(".question h3").html(questions[key].question);
            
        for (var i = 0; i < questions[key].answers.length; i++) {
               $(".answers").append("<p class='answer'>" + questions[key].answers[i] + "<p>");
        }
                
        $(".answers p").on("click", function() {
            var selected = $(this).text();
            console.log(selected);
    
     //create a if then statement: if the question is right show you're right, if wrong show oops! the correct answer was"..."
                if (selected === questions[key].correct) {
                    clearInterval(counter);
                    $(timerDiv).remove();
                    $(questionDiv).remove();
                    $(".answers p").remove();
                    $(answerDiv).remove();
                       $(".main").append(rightDiv);
                    $(".rightAns").text("YOU'RE RIGHT!");
                    correct++;
                } else {
                    clearInterval(counter);
                    $(timerDiv).remove();
                    $(questionDiv).remove();
                    $(".answers p").remove();
                    $(answerDiv).remove();
                    $(".main").append(rightDiv);
                    $(".rightAns").text("OOPS! THE CORRECT ANSWER WAS: " + questions[key].correct);
                    incorrect++;
                }
                n++;
                key = keys[n];
    
    //check to see if it is the last question: if it is show the score
                    if (checkIfLast()) {
                        displayFinalScore();
    
                    } else {
                        setTimeout(countReset, 3000);
                        console.log(countReset);
                        setTimeout(reset, 3000);
                        setTimeout(showQA, 3000);
                    }
        });
    }
    
    showQA();
    
    var counter = setInterval(count, 500);
    
    //create a function that shows the time remaining at the top of each question

    //create a function for a timer for the message after choosing an answer

    //display the final score after 'checkIfLast' returns 

    };
    
    });