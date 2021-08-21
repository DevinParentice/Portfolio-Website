import React from "react";
import Parallax from "parallax-js";
import CELLS from "vanta/dist/vanta.cells.min";
import pdf from "../documents/DevinParenticeResume.pdf";
import TopBar from "./TopBar";

class SplashPage extends React.Component {
	constructor() {
		super();
		this.vantaRef = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {
			pointerEvents: true,
		});
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
		this.parallax.disable();
	}

	render() {
		return (
			<div className="vanta" ref={this.vantaRef}>
				<TopBar />
				<section>
					<div
						ref={(el) => (this.scene = el)}
						className="min-h-screen flex -mt-32 items-center"
					>
						<div data-depth="0.10" className="mr-32">
							<h1 className="main-text select-none text-7xl sm:text-8xl lg:text-9xl text-white ml-10">
								Devin Parentice
							</h1>
							<h2 className="sub-text select-none text-white text-xl sm:text-2xl lg:text-3xl ml-10 mt-10 lg:w-3/4">
								I'm a Philadelphia-based software engineer who loves to build
								incredible digital experiences. Currently, I'm a college senior
								at West Chester University who is focused on learning new
								technologies, building cool apps, and studying.
							</h2>
							<div className="flex items-start">
								<a href="/projects" className="ml-10 mt-10">
									<h3 className="sub-text select-none text-lg sm:text-2xl lg:text-3xl text-white border-b-2 hover:text-white hover:border-white inline-block">
										View Projects
									</h3>
								</a>
								<a
									href={pdf}
									target="_blank"
									rel="noreferrer"
									className="ml-10 mt-10"
								>
									<h3 className="sub-text select-none text-lg sm:text-2xl lg:text-3xl text-white border-b-2 hover:text-white hover:border-white inline-block">
										View Resume
									</h3>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default SplashPage;
