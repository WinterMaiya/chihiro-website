const randomNum = (max) => {
	let num = Math.floor(Math.random() * (max - 1) + 1);
	return num;
};

export default randomNum;
