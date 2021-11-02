import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const gameRule = 'What is the result of the expression?';

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
      return null;
  }
  return result;
};

const getGameData = () => {
  const mathOperators = ['+', '-', '*'];
  const randNumOne = getRndInteger(1, 10);
  const randNumTwo = getRndInteger(1, 10);
  const randOperator = getRndInteger(0, 2);

  const randomQuestion = `${randNumOne} ${mathOperators[randOperator]} ${randNumTwo}`;
  const rightAnswer = String(mathOperations(randNumOne, randNumTwo, mathOperators[randOperator]));
  return [randomQuestion, rightAnswer];
};

const brainCalc = () => gameEngine(gameRule, getGameData);

export default brainCalc;
