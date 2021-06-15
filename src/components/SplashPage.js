import React from "react";
import Parallax from "parallax-js";
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
			<section className="h-screen flex items-center">
				<div ref={(el) => (this.scene = el)}>
					<div className="container" data-depth="0.10">
						<h1 className="main-text select-none text-6xl text-white ml-10">
							Devin Parentice
						</h1>
						<div className="flex">
							<a href={pdf} target="_blank" className="resume">
								<h3 className="sub-text select-none text-2xl text-white ml-10 border-b-2 hover:text-white hover:border-white">
									View Resume
								</h3>
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SplashPage;
