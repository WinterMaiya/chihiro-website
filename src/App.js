import Parallax from "./components/Parallax";
import QuoteOfTheDay from "./components/QuoteOfTheDay";

function App() {
	// TODO create components for website
	return (
		<div className="App">
			<h1>MEET CHIHIRO WINTER</h1>
			<QuoteOfTheDay />
			<Parallax>
				<h2>test</h2>
			</Parallax>
			<Parallax>
				<h2>Test</h2>
			</Parallax>
		</div>
	);
}

export default App;
