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

const gameSettings = () => {
  const mathOperators = ['+', '-', '*'];
  const randNumOne = Math.floor(Math.random() * 10);
  const randNumTwo = Math.floor(Math.random() * 10);
  const randOperator = Math.floor(Math.random() * 3);

  const randomQuestion = `${randNumOne} ${mathOperators[randOperator]} ${randNumTwo}`;
  const rightAnswer = String(mathOperations(randNumOne, randNumTwo, mathOperators[randOperator]));
  return [randomQuestion, rightAnswer];
};

const gameRule = 'What is the result of the expression?';

const brainCalc = () => gameEngine(gameRule, gameSettings);

export default brainCalc;
