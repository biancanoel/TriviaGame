$(document).ready(function() {

    function start () {
        //Loads immediately 
        $("#main-box").empty();
        var startButton = $("<button>")
        startButton.addClass("start-button")
        startButton.text("Westward Ho!")
        $("#main-box").html(startButton);

        counter=0;
        answerChosen;
        timer=10;
        intervalID;
        resultInterval;
        rightAnswers =0;
        wrongAnswers=0;
    }

    start();

    //Game begins when user clicks the Start button
    $("#main-box").on("click", "button.start-button", function(){
        console.log("start clicked");
        $(".start-button").hide();
        nextQuestion(allQuestions[counter]);
    });

    var question1={
        question:"What tragedy occured on December 7, 1941 and is remembered as a 'a day that will live in infamy'?",
        correctAnswer:  "Japanese Attack on Pearl Harbor",
        explanation: "The attack on Pearl Harbor was a surprise air strike from the Japanese Navy to deter the US from entering WWII. The very next day, Congress declared war on Japan.",
        options: ["Japanese Attack on Pearl Harbor", "Sinking of the Lusitania passenger on its way from USA to UK", "Sinking of the Titanic passenger ship on its way from UK to USA","Baatan Death March"],
    };

    var question2={
        question:"The Statue of Libery was originally a gift from which country?",
        correctAnswer:  "France",
        explanation: "Fun fact: France drops rose petals June 6 over Lady Liberty to commemorate D-Day on Normandy Beach.",
        options: ["Canada", "United Kingdom", "France","Germany"],
    };    

    var question3={
        question:"What US president is best known for asking the question '...And so my fellow Americans: ask not what your country can do for you, ask what you can do for your country'?",
        correctAnswer:  "John F Kennedy",
        explanation: "In the height of the Cold War, JFK delivered this impassionated speech calling Americans to rally together to defeat communism in his Inaugural address on January 20, 1961",
        options: ["Franklin Delano Roosevelt", "Andrew Jackson", "John F Kennedy","Jimmy Carter"],
    }; 

    var question4={
        question:"Who is best known for their work on the Underground Railroad?",
        correctAnswer:  "Harriet Tubman",
        explanation: "Harriet Tubman escaped slavery herself and returned countless times to help others escape. The Underground Railroad was a network of people along the road to Canada where escaped slaves would be free.",
        options: ["Frederick Douglas", "John Brown", "Harriet Tubman","Ulysses S. Grant"],
    }; 

    var question5={
        question:"What best descirbes the Manhattan Project'?",
        correctAnswer:  "Research and development project that produced the first nuclear weapons",
        explanation: "This was a top secret project in Los Alamos New Mexico that developed the first atomic bomb that was dropped on Japan in 1945, leading to the end of the Pacific War, and the beginning of a new age in human history.",
        options: ["Relocation project to move displaced Native Americans to New York after the Trail of Tears", "The landmark public works project that developed New York's famed Central Park", "Research and development project that produced the first nuclear weapons", "Nickname for the Immigration Act of 1924"],
       
    }; 

    var allQuestions=[question1, question2, question3, question4, question5];
    
    var counter=0;
    var answerChosen;
    var timer=10;
    var intervalID;
    var resultInterval;
    var rightAnswers =0;
    var wrongAnswers=0;

    function startTimer (){
        
        intervalID = setInterval(decrement, 1000);
    }

    function decrement (array) {
        timer--
        $("#show-timer").html("<h3> Time Left: "+timer+"</h3>")

        if (timer===0) {
            wrongAnswers++;
            clearInterval(intervalID);
            $("#main-box").html("<h2> Sorry, the right answer was "+allQuestions[counter].correctAnswer+ "</h2>");
            resultInterval= setTimeout(nextQuestion, 2000);
            counter++;
            if(counter>=5) {
                scoreboard();
    
            }
            
            
        }
    }

    function result() {
        $("#main-box").empty();
        
        
        if (answerChosen===allQuestions[counter].correctAnswer) {;
    
            $("#main-box").html("<h2> Correct Answer </h2>")
            $("#show-timer").empty();
            clearInterval(intervalID);
            rightAnswers++;
            

        }  
        else {

            $("#main-box").html("<h2> Sorry, the right answer was "+allQuestions[counter].correctAnswer+ "</h2>");
            clearInterval(intervalID);
            wrongAnswers++;
            console.log("youve answered this many wrong: "+wrongAnswers);
        };

        $("#main-box").append("<p>"+allQuestions[counter].explanation+"</p>");
        counter++ ;
        

        if(counter>=5) {
            scoreboard();
        } else {
            resultInterval= setTimeout(nextQuestion, 6000);
        }


    }    

    function nextQuestion() {
            timer=10;
            startTimer();
            
            $("#main-box").empty();
            //show question from array
            var questionDiv= $("<div>");
            questionDiv.addClass("question").text(allQuestions[counter].question);
            $("#main-box").append(questionDiv);
            //show answer options from array

                for (j=0; j<allQuestions[counter].options.length;j++) {
                    var answerOptionDiv= $("<div>");
                    answerOptionDiv.addClass("answer-option").text(allQuestions[counter].options[j]);
                    answerOptionDiv.attr("id", allQuestions[counter].options);
                    $("#main-box").append(answerOptionDiv);
                }

            
            //user selects an answer option 
            $(".answer-option").on("click", function (){
                answerChosen = $(this).text(); //grabs just text inside of this, rather than all of this
                console.log("your answer was: " +answerChosen);
                
                //Check and show user if their answer is right or wrong
                result();
            });

        };

        function scoreboard() {
            $("#main-box").empty();
            $("#main-box").html("<h2>Here's how you did </h2> <h2>Correct Answers: "+rightAnswers+" Incorrect Answers: "+wrongAnswers);

            clearInterval(resultInterval);
            clearInterval(intervalID);

            var restartButton = $("<button>")
            restartButton.addClass("restart-button")
            restartButton.text("Replay Game!")
            $("#main-box").append(restartButton);
        }

        $("#main-box").on("click", "button.restart-button", function(){
            start();
        })

    })
   
