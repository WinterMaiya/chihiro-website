const randomNum = (max) => {
	// Generates a random number
	let num = Math.floor(Math.random() * (max - 1) + 1);
	return num;
};

export default randomNum;
