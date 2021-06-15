import React from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import Project1 from "./components/Project1";
import SplashPage from "./components/SplashPage";
import TopBar from "./components/TopBar";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
						<TopBar />
						<main className="sections">
							<Route path="/" component={SplashPage} />
							<Route path="/projects" component={Project1} />
						</main>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
