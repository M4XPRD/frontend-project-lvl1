import readlineSync from 'readline-sync';

const gameEngine = (gameRule, gameSettings) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, gameAnswer] = gameSettings();
    const question = `Question: ${gameQuestion}`;
    console.log(question);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (gameAnswer === playerAnswer) {
      console.log('Correct!');
    } if (gameAnswer !== playerAnswer) {
      return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
