$(document).ready(function() {
    var win = 0;
    var loss = 0;
    var answersDisplay = $("#answersDisplay");
    var qA_display = $("#question");
    //Array of OBJECTS...
    var qA = [
        {
            question: "What color was Washington's white horse?",
            answers: {
                a: "black",
                b: "pinto",
                c: "white",
                d: "stalion",
            }
            answer: "c",
        },
        {
            question: "David's father has four sons: Luke, Paul, and Chris. what is the name of his fourth son?",
            answers: {
                a: "Luke",
                b: "Paul",
                c: "Chris",
                d: "David",
            }
            answer: "d"
        },
        {
            question: "What is the best bootstrap item?",
            answers:
                a: "form-group",
                b: "jumbotron",
                c: "navbar",
                d: "alert"
            }
            answer: "b",
        }
    ];




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

        // Populate Screen --

    }



// OnClick of Submit button, do win/loss logic, display image, reset timer
    function displayResult(){

    }





}); //End document.ready function...
