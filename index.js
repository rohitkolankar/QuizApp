
 var readlineSync = require('readline-sync');
 const chalk = require('chalk');


function quiz(question,answer){
  var userAnswer=readlineSync.question(chalk.cyanBright.bold(question)+"Choose Your Option: ");
 // console.log("Choose Your Option:")

  if(userAnswer===answer){
    score=score+1
    console.log(chalk.green.bold("Right! Your score is ",score));
  }else{
    score=score-1;
    console.log(chalk.red.bold("Ohh! It's wrong")+"\n"+(chalk.green.bold("The correct option is ",answer)));
    console.log(chalk.green.bold("Your score is ",score));
  }

}


var score=0;
var userName = readlineSync.question( chalk.yellowBright.underline.bold('May I have Your username please?\n'));

console.log(chalk.blue.italic.bold('Welcome '+userName+'!!'));
console.log(chalk.green.underline("Let's Start the quiz!\n"));
console.log(chalk.whiteBright.bgMagenta.underline("It's a GK Quiz!\n")+'\n'+(chalk.whiteBright.underline("There are some instructions : \n1)For the correct answer You will get"+chalk.white.bold.underline(" +1 ")+"\n2)For the wrong answer you will get" +chalk.white.bold.underline(" -1 ")+"\n")));

console.log(chalk.white.bgGrey.bold("All the best "+userName+"!!\n"));
//questions array
play=[{
  question:"Who is Current CM of Madhya Pradesh?\na)Kamalnath\nb)Shivraj singh Chauhan\nc)Uddhav Thakre\nd)Yogi Adityanath \n",
  answer:'b'
},
{
  question:"What is the capital of Maharashtra?\na)Mumbai\nb)Pune\nc)Nagpur\nd)Nashik\n",
  answer:'a'
},
{
  question:"What is the capital of Sikkim?\na)Darjeeling\nb)Gangtok\nc)Pelling\nd)New Jalpaigudi\n",
  answer:'b'
},
{
  question:"Who is a Current Health Minister Of India?\na)Dr Harshawardhan\nb)Nitin gadkari\nc)Rajnath Singh\nd)Sudhanshu Trivedi\n",
  answer:'a'
},
{
  question:"how many Union territories are in india?\na)5\nb)7\nc)6\nd)8\n",
  answer:'d'
},
{
  question:"how many States are in india?\na)28\nb)29\nc)30\nd)26\n",
  answer:'a'
},
{
  question:"Among the following,who was kept in prison of cellular Jail in Andaman and Nicobar?\na)Mahatma Gandhi\nb)Swatantryaveer Sawarkar\nc)Bhagat Singh\nd)B R Ambedkar\n",
  answer:'b'
},
{
  question:"When did shivaji maharaj born?\na)1630\nb)1635\nc)1640\nd)1632\n",
  answer:'a'
},
{
  question:"Where is Ayodhya city situated?\na)Bihar\nb)Jharkhand\nc)Uttar Pradesh\nd)Punjab\n",
  answer:'c'
},
{
  question:"Who is the Founder of Python Language?\na)Guido Van Rossum\nb)Dennis Ritchie\nc)James Arthur Gosling\nd)Yukihiro Matsumoto\n",
  answer:'a'
},

]

for(i=0;i<play.length;i++){
  currQuestion = play[i];

  quiz(currQuestion.question,currQuestion.answer);
  console.log('-----------------------------------')

}
console.log(chalk.blue.underline.bold("Hey",userName+" Your Final score is ",score))


