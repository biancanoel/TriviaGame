$(document).ready(function() {
    function start () {
        //start button
        var startButton = $("<button>")
        startButton.addClass("start-button")
        startButton.text("Westward Ho!")
        $("#main-box").html(startButton);
    }

    start();

    var question1=["What tragedy occured on December 7, 1941 and is known as a 'a day that will live in infamy'?","2", " Japanese Attack on Pearl Harbor", "Sinking of the Lusitania passenger on its way from USA to UK", "Sinking of the Titanic passenger ship on its way from UK to USA", "Baatan Death March"];

    var question2=["What tragedy occured on December 7, 1941 and is known as a 'a day that will live in infamy'?", "Japanese Attack on Pearl Harbor", "Sinking of the Lusitania passenger on its way from USA to UK", "Sinking of the Titanic passenger ship on its way from UK to USA", "Baatan Death March"];

    var question3=["What tragedy occured on December 7, 1941 and is known as a 'a day that will live in infamy'?", "Japanese Attack on Pearl Harbor", "Sinking of the Lusitania passenger on its way from USA to UK", "Sinking of the Titanic passenger ship on its way from UK to USA", "Baatan Death March"];

    var question4=["What tragedy occured on December 7, 1941 and is known as a 'a day that will live in infamy'?", "Japanese Attack on Pearl Harbor", "Sinking of the Lusitania passenger on its way from USA to UK", "Sinking of the Titanic passenger ship on its way from UK to USA", "Baatan Death March"];

    var question4=["What tragedy occured on December 7, 1941 and is known as a 'a day that will live in infamy'?", "Japanese Attack on Pearl Harbor", "Sinking of the Lusitania passenger on its way from USA to UK", "Sinking of the Titanic passenger ship on its way from UK to USA", "Baatan Death March"];

    var allQuestions=[question1, question2, question3, question4];
    

    var answerChosen;
    var timer=30;
    var intervalID;

    function startTimer (){
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000)
    }

    function decrement () {
        timer--
        $("#show-timer").html("<h3> Time Left: "+timer+"</h3>")
    }

    function nextQuestion(array) {
            startTimer();
            
            //show question from array
            var questionDiv= $("<div>");
            questionDiv.addClass("question").text(array[0]);
            $("#main-box").append(questionDiv);
            //show answer options from array
            for (i=2; i<array.length; i++) {
                var answerOptionDiv= $("<div>");
                answerOptionDiv.addClass("answer-option").text(array[i]);
                answerOptionDiv.attr("id", i);
                $("#main-box").append(answerOptionDiv);
            }
            //user selects an answer option
            $(".answer-option").on("click", function (){
                answerChosen = $(this).attr("id");
                console.log("your answer was: " +answerChosen);
                //check if answer is wrong or right
                if (answerChosen===array[1]) {
                    console.log("your answer is correct");
                    //call correct answer function
                    $("#main-box").empty();
                    $("#main-box").html("<h2> Correct Answer </h2>")

                }  
                else {
                    console.log("your answer was wrong");
                    //call wrong answer function
                    $("#main-box").empty();
                    $("#main-box").html("<h2> Sorry, the right answer was "+array[2]+ "</h2>" );

                }
            //NEXT THING: check if timer runs out!!
                if (timer===0){
                    console.log("time ran out!");
                    $("#main-box").empty();
                    $("#main-box").html("<h2> Sorry, the right answer was "+array[2]+ "</h2>" );

                }
            })

            }
        
    



    $(".start-button").on("click", function(){
        console.log("start clicked");
        $(".start-button").hide();

       for (i=0; i<allQuestions.length; i++) {
           nextQuestion(allQuestions[i]);
       }

        //call next question array and start timer 
       //nextQuestion(question1);

        //check for win

        //check for lose or timer runing out

    })
})    
