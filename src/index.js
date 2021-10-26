import readlineSync from 'readline-sync';

const gameEngine = (gameRule, gameSettings) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  let counter = 0;

  for (let i = 0; i < 4; i += 1) {
    const gameQuestion = gameSettings();
    const gameAnswer = gameSettings();
    const question = `Question: ${gameQuestion}`;
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');

    while (counter !== 3) {
      if (gameAnswer === playerAnswer) {
        counter += 1;
        console.log('Correct!');
      } if (gameAnswer !== playerAnswer) {
        return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}".\nLet's try again, ${userName}!`);
      }
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
