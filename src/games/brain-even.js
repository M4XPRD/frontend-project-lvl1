console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenNumber = (num) => num % 2 === 0;

const randomNumber = (min, max = 20) => {
	return Math.random() * (max - min) + min;
};
