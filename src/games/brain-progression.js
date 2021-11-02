import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const gameRule = 'What number is missing in the progression?';

const progressionArray = (number, length, step) => {
  const newArray = [];
  for (let i = number; newArray.length < length; i += step) {
    newArray.push(i);
  }
  return newArray;
};

const getGameData = () => {
  const randomNumber = getRndInteger(1, 10);
  const rowStep = getRndInteger(1, 5);
  const arrayLength = getRndInteger(5, 15);

  const gameProgression = progressionArray(randomNumber, arrayLength, rowStep);
  const randomIndex = getRndInteger(0, gameProgression.length - 1);

  const hiddenNumber = (number) => {
    let result = number;
    if (number > gameProgression.length) {
      result -= 1;
    }
    return result;
  };

  const gameAnswer = String(gameProgression[hiddenNumber(randomIndex)]);

  gameProgression[hiddenNumber(randomIndex)] = '..';

  const gameQuestion = gameProgression.join(' ');

  return [gameQuestion, gameAnswer];
};

const brainProgression = () => gameEngine(gameRule, getGameData);

export default brainProgression;
