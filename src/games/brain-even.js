import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May i have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = () => {
	let rightAnswerRow = 0;
const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	};

const question = `${'Question:'}${getRandomIntInclusive(0, 30)}`;

const playerAnswer = readline.Sync.question('Your answer: ');

if (getRandomInclusive(0, 30) % 2 === 0) {
	if (playerAnswer === 'yes') {
		rightAnswerRow += 1;
		return 'Correct!';
	} else {
		console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
		console.log(`Let's try again, ${userName}!`);
		return;
	} if (rightAnswerRow === 3) {
		return `Congratulations, ${username}`;
}
};

export default brainEven;
