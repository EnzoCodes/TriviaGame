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
var counter; // For time bar and timer display ONLY
var qcounter; // for updating stuff
var subButton;
var questionList = [];
var holdAnswer;
var timeOutText = "You ran out of time!";



// add hide, and show on Start button...

$(document).ready(function() {
    win = 0;
    loss = 0;
    count = 0;
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
        // 3 if else WIN -
        // if timer = 0 || submitLetter != answer -- loss
        // you ran out time OR you didnt answer correct...
        // change qCounter++
        if (Uinput === qA[count].answer) {
            win++
            $("#win").text(win);
            // Also update DOM with image
            counter = 10
            count++
            $("#progressBarIn").empty('inside');
            $("#quiz").empty();
            $("#question").empty();
        } else if (counter === 0 || Uinput != qA[count].answer) {
            loss++
            $("#loss").text(loss);
            //Update with loss image
            count++
            counter = 10;
            $("#progressBarIn").empty('inside');
            $("#quiz").empty();
            $("#question").empty();
        }
    };

    subButton = $('#subButton');
    $(subButton).on('click', getAnswer);


// Countdown... for some reason it goes negative too...
//Build Q/A display with timer...
    function displayMain(){
        //first function, number of times it runs....
        counter = 10;

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
    }; // End displayMain

    function displayQ() {
        var text = (qA[count].question);
        $("#question").html(text);

        var aDisplay = (qA[count].answers[0]);
        for (var x in aDisplay) {
            $("#quiz").append(x + ". " + aDisplay[x] + "<br>");
        }
    }; // end DisplayQ

    displayMain();
    displayQ();
});


//changing qcounter to count may have broken whole thing...
// Still not iterating showing next question right...
