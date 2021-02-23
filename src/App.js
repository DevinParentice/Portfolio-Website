import React from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import ReactFullpage from "@fullpage/react-fullpage";
import Project1 from "./components/Project1";
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
			minHeight: 200.0,
			minWidth: 200.0,
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
			<div className="App">
				<div ref={this.vantaRef}>
					<div>
						<ReactFullpage
							scrollOverflow={true}
							fixedElements={".navbar"}
							loopHorizontal={false}
							controlArrows={false}
							render={({ state, fullpageApi }) => {
								return (
									<div>
										<div id="fullpage-wrapper">
											<TopBar />
											<main className="sections">
												<SplashPage />
												<Project1 />
											</main>
										</div>
									</div>
								);
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
