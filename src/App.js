import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactFormContainer from "./components/ContactFormContainer";
import Projects from "./components/Projects";
import SplashPage from "./components/SplashPage";
import "./styles/App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			title: ["", "❤️", "🧡", "💛", "💚", "💙", "💜"],
			counter: 0,
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			if (this.state.counter >= 6) {
				this.setState({ counter: 0 });
			}
			this.setState({
				counter: this.state.counter + 1,
			});
		}, 1000);
	}

	render() {
		return (
			<>
				<Helmet>
					<title>{`Devin Parentice ${
						this.state.title[this.state.counter]
					}`}</title>
				</Helmet>
				<Router>
					<div className="App">
						<main className="sections">
							<Route path="/" exact component={SplashPage} />
							<Route path="/projects" component={Projects} />
							<Route path="/contact" component={ContactFormContainer} />
						</main>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
