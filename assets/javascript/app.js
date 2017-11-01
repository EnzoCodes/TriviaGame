var win;
var loss;
var userAnswer;
var answersDisplay;
var qA_display;
var input;
var Uinput;
var qA;
var correct = "<img src=assets/images/green.png>";
var incorrect = "<img src=assets/images/red.png>";
var count; // For manual for loop iteration.
var counter; // For time bar and timer display
var subButton;
var questionList = [];
var holdAnswer;
var qcounter;



// add hide, and show on Start button...

$(document).ready(function() {
    win = 0;
    loss = 0;
    count = 0;
    holdAnswer = [];
    questionList = [];
    answersDisplay = $("#answersList");
    qA_display = $("#question");
    //Array of OBJECTS...

    qA = [
        {
            question: "What color was Washington's white horse?",
            answers: [{
                a: "black",
                b: "pinto",
                c: "white",
                d: "stalion",
            }],
            answer: "c",
        },
        {
            question: "David's father has four sons: Luke, Paul, and Chris. what is the name of his fourth son?",
            answers: [{
                a: "Luke",
                b: "Paul",
                c: "Chris",
                d: "David",
            }],
            answer: "d"
        },
        {
            question: "What is the best bootstrap item?",
            answers: [{
                a: "form-group",
                b: "jumbotron",
                c: "navbar",
                d: "alert"
            }],
            answer: "b",
        }
    ];


//var userAnswer = document.quiz.question[i].value;
// userAnswer.push(holdAnswer) -- not sure if backwards..
//     document looks in the html
//         quiz looks in the form.
//                question[i] looks at the question.
//                      value looks at the Users's input.

function getAnswer() {
    Uinput = $('#answerField').val();
    console.log(Uinput);
};

subButton = $('#subButton');
$(subButton).on('click', getAnswer);


// Countdown... for some reason it goes negative too...
//Build Q/A display with timer...
    function displayMain(){
        //first function, number of times it runs....
        counter = 10;
        //second function, number of times it runs...
        count = qA.length; //3

        var interval = setInterval(function() {
            counter--;
            $("#progressBar").addClass('bar');
            $("#progressBarIn").addClass('inside');
            if (counter >= 0) {
                $("#countDown").text(counter);
            } if (counter === 0) {
                clearInterval(counter);
            }
        }, 1000);
        // End Countdown Section

        //Populate Screen
        setTimeout(function() {
                var qcounter = 0;
                var qDisplay = (qA[qcounter].question);
                $("#question").html(qDisplay);

                var aDisplay = (qA[qcounter].answers[0]);
                for (var x in aDisplay) {
                    $("#quiz").append(x + ". " + aDisplay[x] + "<br>");
                }
                qcounter++;
            }, 10000);

            var intervalClear = setTimeout(function() {
                interval;
                $("#progressBarIn").empty('inside');

                if (counter === 0) {
                    $("#question").empty();
                    $("#quize").empty();
                }
            }, 1000);


    };
    displayMain();
}); //End document.ready function...




// Main problems ==
// 1. Can't figure out how to print Array[{object.key{answer}}]
// 2. Inserting delay into for loop....
// 3. storing value of form field...





// qA[0].question = "what color..."
// qA[0].answer = "c"
// qA[1].question = "David's father..."
// Syntax for looking through Array of Objects...

//
// for (var i = 0; i < qA.length; i++) {
//     //generate questions
//     $("#question").html(qA[0].question);
//     //generate formn field
//     $("#answerList").html(qA[0].answers);
//     //generate button
