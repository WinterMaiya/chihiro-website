import { useEffect, useState } from "react";
import quoteGenerator from "../quote_generator/quoteGenerator";

const QuoteOfTheDay = () => {
	const [quote, setQuote] = useState("");

	useEffect(() => {
		// Gets the quote of the day using an Async function because of an external api call
		const getQuote = async () => {
			const dailyQuote = await quoteGenerator();
			setQuote(dailyQuote);
		};
		getQuote();
	}, []);

	return <div id="daily-quote">{quote}</div>;
};

export default QuoteOfTheDay;
