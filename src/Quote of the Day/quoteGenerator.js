import axios from "axios";
import randomNum from "./randomNum";

const quoteGenerator = async () => {
	// Generates a new quote of the day for Chihiro. This will be in mostly meows as a joke with some punctuality. This uses a quote of the day api and then replaces the words
	/* 
    Meow meow meow, meow meow!
    Meow, Meow, Meow.
    Meow, Mow, mow meow.
    */

	const whichCatNoise = (word) => {
		// Takes the first character of the word to determine what cat sound should be made
		// All cat sounds meow, mow, mrow, mrrr, prr, prrt, hh, mrrrrrrrrrrawr, mew, rrrr, e-e-e-e-e-e, awr, hiiiiiiiiiss, mEEEwr, aaaaaaaaaaaa, Wrrrao, Maaorraa
		let letter = word[0].toLowerCase();
		switch (letter) {
			case "z":
				return "maaaaaaaa";
			case "f":
				return "wrrrao";
			case "j":
				return "maaorraa";
			case "q":
				return "hiiiiiiiiiiisss";
			case "a":
				return "mow";
			case "h":
				return "mrow";
			case "i":
				return "mrrr";
			case "b":
				return "prr";
			case "d":
				return "prrr";
			case "h":
				return "mrrrrrrrrrrawr";
			case "r":
				return "mew";
			case "p":
				return "rrr";
			case "u":
				return "et-et-et-et";
			case "s":
				return "awr";
			case "n":
				return "meeow";
			default:
				return "meow";
		}
	};

	const getQuoteApi = async () => {
		// Connects to api endpoint https://quotes.rest which generates a quote of the day
		try {
			const { data } = await axios.get("https://quotes.rest/qod?language=en");
			// console.log(data);
			return data.contents.quotes[0].quote;
		} catch (e) {
			console.error(e);
			return "error";
		}
	};

	// Converts quotes into an array of strings
	const quote = await getQuoteApi();
	let arrQuote = quote.split(" ");

	// Determines if the next word needs to be capitalized
	let capitalizeNext = true;

	for (let index in arrQuote) {
		let word = arrQuote[index];
		let endingPunc = "";
		let toCap = false;

		// Checks any ending punctuation
		if (word.slice(-1) === ".") {
			toCap = true;
			endingPunc += ".";
		}
		if (word.slice(-3) === "...") {
			// Specifically if there are trailing dots
			endingPunc += "..";
		}
		if (word.slice(-2) === "'s") {
			endingPunc += "'s";
		}
		if (word.slice(-1) === ",") {
			endingPunc += ",";
		}

		word = whichCatNoise(word) + endingPunc;
		if (capitalizeNext === true) {
			// Capitalizes a word if it needs to be
			word = word.charAt(0).toUpperCase() + word.slice(1);
		}

		// Replaces the word in the index
		arrQuote[index] = word;

		// Decides if the next letter should be capital
		toCap === true ? (capitalizeNext = true) : (capitalizeNext = false);
	}

	const finalQuote = arrQuote.join(" ");

	console.log(finalQuote);
};

export default quoteGenerator;
