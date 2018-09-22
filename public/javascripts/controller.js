$(document).ready(function() {
  let questionNumber = 0;
  let questionBank = new Array();
  let stage = "#game1";
  let stage2 = new Object();
  //let questionLock = false;
  let numberOfQuestions;
  let score = 0;

  let optionid = null;
  let answertext;

  //Review code
  let scorehold = new Array();
   
  $.post(
    "/jsonset",
    function(data) {
      console.log(data);
      for (let i = 0; i < data.quizlist.length; i++) {
        questionBank[i] = new Array();
        questionBank[i][0] = data.quizlist[i].question;
        questionBank[i][1] = data.quizlist[i].option1;
        questionBank[i][2] = data.quizlist[i].option2;
        questionBank[i][3] = data.quizlist[i].option3;
        questionBank[i][4] = data.quizlist[i].option4;
      }
      numberOfQuestions = questionBank.length;
      displayQuestion();
    },
    "json"
  );

  function displayQuestion() {
    let rnd = Math.random() * 4;
    rnd = Math.ceil(rnd);
    let q1;
    let q2;
    let q3;
    let q4;

    if (rnd == 1) {
      q1 = questionBank[questionNumber][1];
      q2 = questionBank[questionNumber][2];
      q3 = questionBank[questionNumber][3];
      q4 = questionBank[questionNumber][4];
    }
    if (rnd == 2) {
      q2 = questionBank[questionNumber][1];
      q3 = questionBank[questionNumber][2];
      q4 = questionBank[questionNumber][3];
      q1 = questionBank[questionNumber][4];
    }
    if (rnd == 3) {
      q3 = questionBank[questionNumber][1];
      q4 = questionBank[questionNumber][2];
      q1 = questionBank[questionNumber][3];
      q2 = questionBank[questionNumber][4];
    }
    if (rnd == 4) {
      q4 = questionBank[questionNumber][1];
      q1 = questionBank[questionNumber][2];
      q2 = questionBank[questionNumber][3];
      q3 = questionBank[questionNumber][4];
    }

    $(stage).append(
      '<div class="questionText">' +
        questionBank[questionNumber][0] +
        '</div><div id="1" class="option">' +
        q1 +
        '</div><div id="2" class="option">' +
        q2 +
        '</div><div id="3" class="option">' +
        q3 +
        '</div><div id="4" class="option">' +
        q4 +
        '</div><div id="start" class="buttons"><div align="center">Confirm</div></div>'
    );

    $(".option").click(function() {
      $(".buttons").hide();
      $(".option").css("border", "2px solid white");
      $(this).css("border", "3px solid yellow");

      optionid = this.id;
      answertext = $(this).text(); 
  
      $(stage).append(
        '<div id="start" class="buttons"><div align="center">Confirm</div></div>'
      );
      $(".buttons").click(function() {  
        if (optionid == rnd) {
          score++;
        }

        //Review Code
        scorehold[questionNumber] = answertext;
        $(".buttons").css({ background: "#FF0000" });

        setTimeout(
          function() {            
            changeQuestion();
          },
          400
        ); //1000
      });
    });
  } //display question

  function changeQuestion() {
    console.log("Hello Q");
    questionNumber++;
    if (stage == "#game1") {      
      stage2 = "#game1";
      stage = "#game2";
    } else {      
      stage2 = "#game2";
      stage = "#game1";
    }

    if (questionNumber < numberOfQuestions) {      
      displayQuestion();
    } else {
      displayFinalSlide();
    }

    $(stage2).animate({ right: "+=800px" }, "slow", function() {
      $(stage2).css("right", "-800px");
      $(stage2).empty();
    });
    $(stage).animate({ right: "+=800px" }, "slow", function() {
      /*questionLock=false;*/
    });
  } //change question

  function displayFinalSlide() {

    //save data for reviewing in questionReview.jsp page
    let serializedArr = JSON.stringify(scorehold); //serializing text into variable for review
    localStorage.setItem("_review", serializedArr);
    //save data end

    $(stage).append(
      '<div class="questionText">You have finished the quiz!<br><br>Total questions: ' +
        numberOfQuestions +
        "<br>Correct answers: " +
        score +
        '</div><br><form id="form" action="/scoreupdate" method="post"><input type="text" name="noofqs" value=' +
        numberOfQuestions +
        '/><input type="text" name="score" value=' +
        score +
        '/><div id="sub" class="buttons"><div align="center">Finish Quiz</div></div>    </form>'
    );
    $(":text").hide();

    $("#sub").click(function() {
      $("#form").submit();
    });
  } //display final slide
}); //doc ready
