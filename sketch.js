var canvas, backgroundImage;

var gamestate = 0;
var contestantcount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantcount === 2){
    // Actualiza quiz
    quiz.update();
    // Llama al método update que está dentro de la clase quiz
  }
  if(gamestate === 1){
    clear();
    // Actualiza play
    play.update()
    // Llama al método play que está dentro de la clase quiz
  }
}
