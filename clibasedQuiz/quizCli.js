import fs from "fs";
import chalk from "chalk";
import readline from "readline";

const Quiz = JSON.parse(fs.readFileSync("quiz.json", "utf-8"));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let score = 0;
let index = 0;

console.log(chalk.yellow.bold("\n======= Welcome to the Quiz ========\n"));

function askQuestion() {
  if (index < Quiz.length) {
    const q = Quiz[index];
    console.log(chalk.red(`Question ${index + 1}, ${q.question}`));
    q.options.forEach((option, i) => {
      console.log(chalk.blue(`${i + 1} : ${option}`));
    });
    rl.question(
      chalk.green("Enter your Answer(number) : "), (answer) => {
        const userAnswer = parseInt(answer);
        if (userAnswer === q.answer) {
          console.log(chalk.green("Correct Answer"));
          score++;
        } else {
          console.log(
            chalk.red(`Wrong Answer , The Correct Answer was ${q.answer}`),
          );
        }
        index++;
        askQuestion();
      },
    );
  } else {
    console.log(chalk.yellow(`Quiz is over your final score is ${score} / ${Quiz.length}`));
    rl.close();
  }
}

askQuestion();
