import readlineSync from 'readline-sync';

const gameRounds = 3;

const gameEngine = (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < gameRounds; i += 1) {
    const [randomQuestion, rightAnswer] = getGameData();
    console.log(`Question: ${randomQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
