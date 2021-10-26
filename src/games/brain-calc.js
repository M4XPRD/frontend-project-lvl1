import gameEngine from '../src/index.js';

const gameRule = 'What is the result of the expression?';

const mathOperations = (num1, num2, operators) => {
	switch (operator) {
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
	const gameAnswer = mathOperations(randomNumberOne, randomNumberTwo, mathOperators[randomOperator]);
};

const brainCalc = gameEngine(gameRule, gameSettings);

export default brainCalc;
