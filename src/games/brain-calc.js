import gameEngine from '../index.js';

const mathOperations = (num1, num2, operators) => {
  let result = '';
  switch (operators) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const mathOperators = ['+', '-', '*'];
const randNumOne = Math.floor(Math.random() * 10);
const randNumTwo = Math.floor(Math.random() * 10);
const randOperator = Math.floor(Math.random() * 3);

const gameQuestion = () => {
  const randomQuestion = `${randNumOne} ${mathOperators[randOperator]} ${randNumTwo}`;
  return randomQuestion;
};

const gameAnswer = () => {
  const rightAnswer = String(mathOperations(randNumOne, randNumTwo, mathOperators[randOperator]));
  return rightAnswer;
};

const gameRule = 'What is the result of the expression?';

const brainCalc = () => gameEngine(gameRule, gameQuestion, gameAnswer);

export default brainCalc;
