import axios from "axios";
import randomNum from "./randomNum";

const quoteGenerator = () => {
	// Generates a new quote of the day for Chihiro. This will be in mostly meows as a joke with some punctuality.
	/* 
    Meow meow meow, meow meow!
    Meow, Meow, Meow.
    Meow, Mow, mow meow.
    */

	const numberOfSentences = randomNum(4);
	// This determines the number of periods in a sentence
	console.log(numberOfSentences);

	const getQuoteApi = async () => {
		const { data } = await axios.get("https://quotes.rest/qod?language=en");
		console.log(data);
	};
	getQuoteApi();
};

export default quoteGenerator;
