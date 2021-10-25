import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May i have your name? ');
console.log(Hello, ${userName}!);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenNumber = (num) => num % 2 === 0;

const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const question = `${'Question:'}${getRandomIntInclusive(0, 30)}`;


