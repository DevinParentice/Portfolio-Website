import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactFormContainer from "./components/ContactFormContainer";
import Projects from "./components/Projects";
import SplashPage from "./components/SplashPage";
import "./styles/App.css";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<main className="sections">
						<Route path="/" exact component={SplashPage} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={ContactFormContainer} />
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
