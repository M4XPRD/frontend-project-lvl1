import gameEngine from '../index.js';

const gameRule = 'What is the result of the expression?';

const mathOperations = (num1, num2, operators) => {
  switch (operators) { 
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
  }
};

const gameSettings = () => {
  const mathOperators = ['+', '-', '*'];
  const randomNumberOne = Math.floor(Math.random() * 10);
  const randomNumberTwo = Math.floor(Math.random() * 10);
  const randomOperator = Math.floor(Math.random() * 3);

  const gameQuestion = `${randomNumberOne} ${mathOperators[randomOperator]} ${randomNumberTwo}`;
  const gameAnswer = String(mathOperations(randomNumberOne, randomNumberTwo, mathOperators[randomOperator]));
  return [gameQuestion, gameAnswer];
};

const brainCalc = () => gameEngine(gameRule, gameSettings);

export default brainCalc;
