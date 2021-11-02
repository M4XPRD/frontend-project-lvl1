import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const getGameData = () => {
  const randNumOne = getRndInteger(1, 50);
  const randNumTwo = getRndInteger(1, 50);
  const gameQuestion = `${randNumOne} ${randNumTwo}`;
  const gameAnswer = String(findGCD(randNumOne, randNumTwo));
  return [gameQuestion, gameAnswer];
};

const brainGCD = () => gameEngine(gameRule, getGameData);

export default brainGCD;
