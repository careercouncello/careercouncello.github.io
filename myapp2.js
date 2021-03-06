function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
var b;
function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  b = quiz.score;
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
  let div = document.createElement("button");
  div.className = "btnmq";

  div.innerHTML = "Submit";

  document.body.append(div);

  div.setAttribute("onclick", "vishaln();");
}

// create questions
var questions = [
  new Question(
    "Would you like to manage people's bank accounts in bank?",
    ["Yes", "No", "Not sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Would you like to become a chartered accountant?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you take part in financial planning strategy of your family?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to collect information on taxes such as CGST,SGST,etc?",
    ["Yes", "No", "Not sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Are you updated about recent currency changes in daily life?",
    ["Yes", "No", "Not sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to invest your money in proper direction and make profit?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to read economical books?",
    ["Yes", "No", "Not sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "The cost price of 20 articles is same as the selling price of X articles. If the profit is 25 perent then the value of X is?",
    ["15", "16", "18", "13"],
    "16"
  ),
  new Question(
    "1st Governor of RBI?",
    ["Shashikant Das", "Dr.C.Rangarajan ", "C.D.Deshmukh", "N.S.vishwanathan"],
    "C.D.Deshmukh"
  ),
  new Question(
    "Pawan medical supplies medicines.On some medicines the rate of GST is 12%,then what is the rate of  CGST and SGST?",
    ["5%", "4%", "8%", "6%"],
    "6%"
  ),
  new Question(
    "What is the full form of NEFT?",
    [
      "Net Electronic Fund Transfer",
      "National Electronic Fund Transfer",
      "Nationalc Electronic functional Transfer",
      " Net Electronic functional Transfer",
    ],
    "National Electronic Fund Transfer"
  ),
  new Question(
    "A sum of money at simple interest amounts to Rs.815 in 3 years and to Rs.854 in 4 years. The sum is?",
    ["690", "700", "698", "702"],
    "698"
  ),
  new Question(
    "Whose signature is there on 2000rs note?",
    [
      "Central Finance Minister ",
      "Supreme Court Judge",
      "Prime Minister",
      "RBI Governor",
    ],
    "RBI Governor"
  ),
  new Question(
    "Name the sector in which the government owns most of the assests amd provides all the services?",
    ["Private sector", "Public sector", "In both sector", "None of these"],
    "Public sector"
  ),
  new Question(
    "GST act commence form?",
    ["1st July 2017", "1st December 2017", "1st may 2018", "15th August 2017"],
    "1st July 2017"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
