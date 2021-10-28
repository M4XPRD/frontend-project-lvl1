import gameEngine from '../index.js';

const findGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } if (num2 === 0) {
    return num1;
  } let i = num1;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

const gameSettings = () => {
  const randNumOne = Math.floor(Math.random() * 50);
  const randNumTwo = Math.floor(Math.random() * 50);
  const gameQuestion = `${randNumOne} ${randNumTwo}`;
  const gameAnswer = String(findGCD(randNumOne, randNumTwo));
  return [gameQuestion, gameAnswer];
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => gameEngine(gameRule, gameSettings);

export default brainGCD;
