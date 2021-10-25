import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May i have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = () => {
  for (let i = 0; i < 4; i += 1) {
    const getRandomIntInclusive = Math.floor(Math.random() * 20);
    const question = `Question: ${getRandomIntInclusive}`;
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');
    let rightAnswerRow = 0;
    if (getRandomIntInclusive % 2 === 0) {
      if (playerAnswer === 'yes') {
        rightAnswerRow += 1;
        console.log('Correct!');
        const question = `Question: ${getRandomIntInclusive}`;
        console.log(question);
      } if (getRandomIntInclusive % 2 !== 0) {
        if (playerAnswer === 'no') {
          rightAnswerRow += 1;
          console.log('Correct!');
          const question = `Question: ${getRandomIntInclusive}`;
          console.log(question);
        }
      } else {
        rightAnswerRow = 0;
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}!`);
        const question = `Question: ${getRandomIntInclusive}`;
        console.log(question);
      } if (rightAnswerRow === 3) {
        console.log(`Congratulations, ${username}!`);
      }
    }
  }
};

export default brainEven;
