import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CELLS from "vanta/dist/vanta.cells.min";
import Projects from "./components/Projects";
import SplashPage from "./components/SplashPage";
import TopBar from "./components/TopBar";
import "./styles/App.css";

class App extends React.Component {
	constructor() {
		super();
		this.vantaRef = React.createRef();
	}

	componentDidMount() {
		this.vantaEffect = CELLS({
			el: this.vantaRef.current,
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			scale: 1.0,
			color1: 0x0,
			color2: 0x252525,
			size: 5.0,
			speed: 1.0,
		});
	}

	componentWillUnmount() {
		if (this.vantaEffect) this.vantaEffect.destroy();
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="vanta" ref={this.vantaRef}>
						<main className="sections">
							<Route path="/" exact component={SplashPage} />
							<Route path="/projects" component={Projects} />
						</main>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
