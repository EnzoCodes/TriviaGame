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
var imageLoss;
var imageWin;
var interval;



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


    function getAnswer() {
        Uinput = $('#answerField').val();
        console.log(Uinput);
        console.log(counter);
        // 3 if else WIN -
        // if timer = 0 || submitLetter != answer -- loss
        // you ran out time OR you didnt answer correct...
        // change qCounter++
        if (Uinput === qA[count].answer) {
            win++
            $("#win").text(win);
            count++
            $("#progressBarIn").empty('inside');
            $("#quiz").empty();
            $("#question").empty();
            displayQ();
            displayMain();
            counter = 10;
        } else if (Uinput != qA[count].answer) {
            loss++;
            $("#loss").text(loss);
            //Update with loss image
            //Loss image
            count++;
            $("#progressBarIn").empty('inside');
            $("#quiz").empty();
            $("#question").empty();
            displayQ();
            counter = 10;
        }
    };

    subButton = $('#subButton');
    $(subButton).on('click', getAnswer);

    function displayQ() {
        var text = (qA[count].question);
        $("#question").html(text);

        var aDisplay = (qA[count].answers[0]);
        for (x in aDisplay) {
            $("#quiz").append(x + ". " + aDisplay[x] + "<br>");
        }
    }; // end DisplayQ

    // imageWin = setInterval(function(){
    //     $("#quiz").empty();
    //     $("#question").empty();
    //     $("#question").html("<img src='assets/images/green.png'>")
    // }, 3000);
    //
    // imageLoss = setInterval(function(){
    //     $("#quiz").empty();
    //     $("#question").empty();
    //     $("#question").html("<img src='assets/images/red.png'>")
    // }, 3000);

    // Countdown... for some reason it goes negative too...
    //Build Q/A display with timer...
        function displayMain(){
            //first function, number of times it runs....
            counter = 10;

            interval = setInterval(function() {
                counter--;
                $("#progressBar").addClass('bar');
                $("#progressBarIn").addClass('inside');
                if (counter >= 0) {
                    $("#countDown").text(counter + " s");
                } if (counter === 0) {
                    count++;
                    // clearInterval(counter);
                    // $("#progressBar").empty('bar');
                    loss++;
                    $("#loss").text(loss);
                    //Update with loss image
                    //Loss image
                    $("#progressBarIn").empty('inside');
                    $("#quiz").empty();
                    $("#question").empty();
                    displayQ();
                    counter = 10;
                }
            }, 1000);
            // End Countdown Section
        }; // End displayMain
        displayQ();
        displayMain();
});


//changing qcounter to count may have broken whole thing...
// Still not iterating showing next question right...
