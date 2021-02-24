import React from "react";
import Parallax from "parallax-js";
import About from "./About";
import pdf from "../documents/DevinParenticeResume.pdf";

class SplashPage extends React.Component {
	componentDidMount() {
		this.parallax = new Parallax(this.scene, {
			pointerEvents: true,
		});
	}

	componentWillUnmount() {
		this.parallax.disable();
	}

	render() {
		return (
			<section className="section section1 h-screen flex items-center">
				<div ref={(el) => (this.scene = el)}>
					<div className="container slide" data-depth="0.10">
						<h1 className="main-text select-none text-6xl sm:text-9xl text-white ml-10">
							Devin Parentice
						</h1>
						<div className="flex">
							<a
								href={pdf}
								rel="noopener noreferrer"
								target="_blank"
								className="resume"
							>
								<h3 className="sub-text select-none text-2xl sm:text-4xl text-white ml-10 border-b-2 hover:text-white hover:border-wite">
									View Resume
								</h3>
							</a>
						</div>
					</div>
					<About />
				</div>
			</section>
		);
	}
}

export default SplashPage;
