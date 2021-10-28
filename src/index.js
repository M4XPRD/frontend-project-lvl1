import readlineSync from 'readline-sync';

const gameEngine = (gameRule, gameQuestion, gameAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < 3; i += 1) {
    const randomQuestion = gameQuestion();
    const rightAnswer = gameAnswer();
    console.log(`Question: ${randomQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === playerAnswer) {
      console.log('Correct!');
    } if (rightAnswer !== playerAnswer) {
      return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
