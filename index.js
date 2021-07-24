var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.blue("Welcome to Cricket Trivia Quiz"));

var username = readlineSync.question(chalk.yellow("Please enter your name? "));

console.log(chalk.yellowBright("**********************************"));
console.log(chalk.red(username +" Here are some instruction for the quiz."));
console.log(chalk.blueBright("1.This quiz consist of 10 interesting cricket trivia questions."));
console.log(chalk.blueBright("2.For each correct answer you will be awarded with 1 point."));
console.log(chalk.blueBright("3.You have to write option given below other than that it will not accept."));
console.log(chalk.yellowBright("**********************************"));


var score =0;
function quiz (options,question,answer) {
  var userAnswer = readlineSync.keyInSelect(options,question);
  if(options[userAnswer] === answer){
    score = score + 1;
    console.log(chalk.greenBright('Yay! your answer is correct'));
    console.log(chalk.yellowBright('Your score is: '+score));
  }
  else{
    console.log(chalk.red('Oh No! You got this wrong '));
  }
  
}

var questions = [
    {
        array: ['Rohit Sharma', 'Virat Kohli', 'MS Dhoni', 'Virendra Sehwag'],
        question: 'Which Indian Cricketer has most number of double century? ',
        answer: 'Rohit Sharma'
    },
    {
        array: ['Zaheer Khan', 'Mohammad Shami', 'Jasprit Bumrah', 'Ashish Nehra'],
        question: 'Indian player take most hat-trick in a WorldCup ',
        answer: 'Mohammad Shami'
    },
    {
        array: ['Ashes','Border-Gavaskar Trophy','Big Bash','The Hundered'],
        question: 'What is the name of the trophy awarded in India-Australia test series?',
        answer: 'Border-Gavaskar Trophy'
    },
    {
        array: ['1999','1992','1989','1995'],
        question: 'When did Sachin Tendulkar make his Test debut ?',
        answer: '1989'
    },
    {
        array: ['Virendra Sehwag','Mathew Hayden','Brain Lara','Rahul Dravid'],
        question: 'Who scored highest runs in test in an innings ?',
        answer: 'Brain Lara'
    },
    {
        array: ['Charlotte Edwards','Stafanie Taylor','Mithali Raj','Belinda Clark'],
        question: 'Who is the leading run scorer in womens cricket ?',
        answer: 'Mithali Raj'
    },
    {
        array: ['James Anderson','Steven Finn','Andrew Flintoff','Stuart Broad'],
        question: 'Against which bowler Yuvraj Singh hit six back to back sixes',
        answer: 'Stuart Broad'
    },
    {
        array: ['Julhan Goswami','CL Fitzpatrick','KH Brunt','EA Perry'],
        question: 'Leading wicket taker in women ODI cricket',
        answer: 'Julhan Goswami'
    },
    {
        array: ['New-Zealand','England','India','Australia'],
        question: 'Which nation has won most number of Worldcup Titles',
        answer: 'Australia'
    },
    

];


for(var i=0; i < questions.length; i++){
  console.log('\n');
  console.log(chalk.cyanBright('Question', i+1));
  quiz(questions[i].array, questions[i].question, questions[i].answer);

  console.log('*******************************');
}

var leaderboard = [
    { name: 'Rutvik', score: '7' },
    { name: 'Karan', score: '6' },
    { name: 'Sau', score: '5' },
    { name: 'Niraj', score: '9' }
];

console.log(chalk.yellowBright.underline('LeaderBoard:'));
console.log(chalk.cyanBright('Name       Score'));

for (var i = 0; i < leaderboard.length; i++) {
    console.log(chalk.greenBright(leaderboard[i].name, '   ', leaderboard[i].score));
}

console.log('\n');
console.log(chalk.cyanBright.italic.underline('Congratulations,', username, 'your Total Score is: ', score));
console.log('\n');
console.log(chalk.yellowBright.italic('Thanks for Solving the Quiz,if you have beaten the score that is on the leaderboard than Please take the Screenshot of the Score and Send it to Rudresh.'));


