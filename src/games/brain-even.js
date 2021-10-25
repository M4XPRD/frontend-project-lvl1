import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswerRow = 0;

  for (let i = 0; i < 4; i += 1) {
    const getRandomIntInclusive = Math.floor(Math.random() * 20);
    const question = `Question: ${getRandomIntInclusive}`;
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (getRandomIntInclusive % 2 === 0 && playerAnswer === 'yes') {
      rightAnswerRow += 1;
      console.log('Correct!');
    } if (getRandomIntInclusive % 2 === 0 && playerAnswer !== 'yes') {
      return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
    } if (getRandomIntInclusive % 2 !== 0 && playerAnswer === 'no') {
      rightAnswerRow += 1;
      console.log('Correct!');
    } if (getRandomIntInclusive % 2 !== 0 && playerAnswer !== 'no') {
      return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
    } if (rightAnswerRow === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
  return console.log();
};

export default brainEven;
