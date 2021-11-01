import gameEngine from '../index.js';
import getRndInteger from '../numberRandomiser.js';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameSettings = () => {
  const randomNumber = getRndInteger(0, 100);
  const gameQuestion = randomNumber;
  const gameAnswer = String(isPrime(randomNumber));
  return [gameQuestion, gameAnswer];
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => gameEngine(gameRule, gameSettings);

export default brainPrime;
