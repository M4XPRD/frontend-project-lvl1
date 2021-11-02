import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const randomNumber = getRndInteger(2, 100);
  const gameQuestion = randomNumber;
  const gameAnswer = String(isPrime(randomNumber) ? 'yes' : 'no');
  return [gameQuestion, gameAnswer];
};

const brainPrime = () => gameEngine(gameRule, getGameData);

export default brainPrime;
