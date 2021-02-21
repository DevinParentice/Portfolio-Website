import React from "react";
import Parallax from "parallax-js";
import pdf from "../documents/DevinParenticeResume.pdf";

class SplashPage extends React.Component {
	componentDidMount() {
		this.parallax = new Parallax(this.scene);
	}

	componentWillUnmount() {
		this.parallax.disable();
	}

	render() {
		return (
			<section
				ref={(el) => (this.scene = el)}
				className="section section1 flex flex-row w-screen h-screen min-w-full max-w-full items-center"
			>
				<div className="container" data-depth="0.20">
					<h1 className="main-text text-6xl sm:text-9xl text-white ml-10">
						Devin Parentice
					</h1>
					<div className="flex">
						<a href={pdf} rel="noopener noreferrer" target="_blank">
							<h3 className="sub-text text-2xl sm:text-4xl text-white ml-10 border-b-2 hover:text-white hover:border-wite">
								View Resume
							</h3>
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default SplashPage;
