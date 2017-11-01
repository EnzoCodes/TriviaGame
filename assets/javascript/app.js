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
var count;
var subButton;


// add hide, and show on Start button...

$(document).ready(function() {
    win = 0;
    loss = 0;
    count = 0;
    holdAnswer = [];
    answersDisplay = $("#answersList");
    qA_display = $("#question");
    //Array of OBJECTS...

    qA = [
        {
            question: "What color was Washington's white horse?",
            answers: {
                a: "black",
                b: "pinto",
                c: "white",
                d: "stalion",
            },
            answer: "c",
        },
        {
            question: "David's father has four sons: Luke, Paul, and Chris. what is the name of his fourth son?",
            answers: {
                a: "Luke",
                b: "Paul",
                c: "Chris",
                d: "David",
            },
            answer: "d"
        },
        {
            question: "What is the best bootstrap item?",
            answers: {
                a: "form-group",
                b: "jumbotron",
                c: "navbar",
                d: "alert"
            },
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
    Uinput = $('#answerField').value;
    console.log(Uinput);
}
// use an eventlistener for the event
subButton = $('#subButton');
$(subButton).on('click', getAnswer);




// Countdown... for some reason it goes negative too...
//Build Q/A display with timer...
    function displayMain(){
        // Countdown... for some reason it goes negative too...
        var counter = 10;
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
        function displayQ(){
            for (var i = 0; i < qA.length; i++) {
            $("#question").html(qA[i].question);
            $("#answerList").html()
        }

            //grab formn field value on.click("button")

            //check against qA[i].answer
                //Correct condition

                //Incorrect condition




        };
    };

}); //End document.ready function...


// Main problems ==
// 1. Value from form field is spitting undefined...
// 2. Can't figure out how to print Array[{object.key{answer}}]
// 3. Inserting delay into for loop....
// 4. storing value of form field...





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
