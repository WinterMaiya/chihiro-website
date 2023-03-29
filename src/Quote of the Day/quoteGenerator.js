import axios from "axios";
import randomNum from "./randomNum";

const quoteGenerator = async () => {
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
		try {
			const { data } = await axios.get("https://quotes.rest/qod?language=en");
			// console.log(data);
			return data.contents.quotes[0].quote;
		} catch (e) {
			console.error(e);
			return "error";
		}
	};
	const quote = await getQuoteApi();
	console.log(quote.split(" ").join(" "));
	let arrQuote = quote.split(" ");
	const findEndPunctuation = (word) => {
		// TODO
	};
	// Determines if the next word needs to be capitalized
	let capitalizeNext = true;
	for (let index in arrQuote) {
		let word = arrQuote[index];
		let endingPunc = "";
		let toCap = false;

		if (word.slice(-1) === ".") {
			toCap = true;
			endingPunc += ".";
		}
		// Simple function
		if (capitalizeNext) {
			arrQuote[index] = "Meow" + endingPunc;
			capitalizeNext = false;
		} else {
			arrQuote[index] = "meow" + endingPunc;
		}

		// Decides if the next letter should be capital
		toCap === true ? (capitalizeNext = true) : (capitalizeNext = false);
	}

	const finalQuote = arrQuote.join(" ");

	console.log(finalQuote);
};

export default quoteGenerator;
