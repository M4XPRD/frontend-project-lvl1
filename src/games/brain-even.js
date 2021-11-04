import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const randomNumber = getRndInteger(0, 20);
  const gameQuestion = randomNumber.toString();
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const brainEven = () => gameEngine(gameRule, getGameData);

export default brainEven;
