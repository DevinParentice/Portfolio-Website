import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
