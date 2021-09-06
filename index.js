var readlineSync = require('readline-sync');
const chalk= require('chalk');

console.log(chalk.magenta("Welcome to ")+ chalk.bold.blue("F.R.I.N.D.E.S ") +chalk.magenta("Quiz \n"));
let userName=readlineSync.question(chalk.cyan("May I have your name?"));
console.log(chalk.magenta("Hi "+userName+" , Choose options(a/b/c/d) to answer. Have Fun! "));
console.log("-------------------------------------------------\n")
const data=[
  {
    question:"1)What’s the name of Joey’s penguin? \na.Snowflake \nb.Waddle \nc.Huggsy \nd.Bobber",
    answer:"c"
  },
   {
    question:"2)What song is Phoebe best known for? \na.Smelly Cat \nb.Smelly Dog \nc.Smelly Rabbit \nd.Smelly Worm",
    answer:"a"
  },
  {
    question:"3)What is Chandler’s middle name? \na.Jason \nb.Mehul \nc.Kim \nd.Muriel",
    answer:"d"
  },
  
   {
    question:"4)What are Ross and Monica’s parents called? \na.Jack and Jill \nb.Philip and Holly \nc.Jack and Judy \nd.Margaret and Peter",
    answer:"c"
  },
  {
    question:"4)Who was Chandler’s TV magazine always addressed to? \na.Chanandler Bong \nb.Chanandler Bang \nc.Chanandler Bing \nd.Chanandler Beng",
    answer:"a"
  },
];
let score=0;
function playQuiz(data){
  for(let i=0;i<data.length;i++){
   
    var ans=readlineSync.question(chalk.cyan(data[i].question)+"\n");

    if(ans===data[i].answer){
      console.log(chalk.green("You are right!"));
      score++;
    }
    else{
       console.log(chalk.red("You are wrong!"));
       console.log(chalk.blue("Correct answer is "+data[i].answer));
    }
     console.log(chalk.yellow("Current Score: "+ score));
     console.log("-------------------------------------------------\n\n");
  }
  
}

playQuiz(data);
console.log(chalk.yellow("Your final Score is "+score));

const highScores=[
  {
    player1:"Neha",
    score:5
  },
   {
    player1:"Omkar",
    score:4
  }
];
for(let i=0;i<highScores.length;i++){
if(score>=highScores[i].score){
  console.log(chalk.magenta("Congratulations! "+userName+ ", you have beaten the high Score."));
  break;
}
else{
  var retry=readlineSync.question(chalk.red("You wanna retry?(yes/no)"));
  if(retry==="yes"){
    score=0;
    console.log("\n---------------------------------------------------------------\n");
    playQuiz(data);
  }
  else{
    console.log("Quiz Over");
  }
  
}
}
