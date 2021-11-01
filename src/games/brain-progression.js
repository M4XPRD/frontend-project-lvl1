import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const progressionArray = (number, step) => {
  const newArray = [];
  const arrayLength = getRndInteger(5, 15);
  for (let i = number; newArray.length < arrayLength; i += step) {
    newArray.push(i);
  }
  return newArray;
};

const gameSettings = () => {
  const randomNumber = getRndInteger(1, 10);
  const rowStep = getRndInteger(1, 5);

  const gameProgression = progressionArray(randomNumber, rowStep);
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

const gameRule = 'What number is missing in the progression?';

const brainProgression = () => gameEngine(gameRule, gameSettings);

export default brainProgression;
