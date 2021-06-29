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
			<section className="">
				<div
					ref={(el) => (this.scene = el)}
					className="h-screen flex items-center"
				>
					<div data-depth="0.10">
						<h1 className="main-text select-none text-6xl text-white ml-10">
							Devin Parentice
						</h1>
						<h4 className="sub-text select-none text-white ml-10 mt-10 mr-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
							dicta hic harum magnam. Fugiat dolorem consequuntur at sequi, vel
							debitis facere provident dolore quae ipsum sed voluptatibus id
							dolor officiis.
						</h4>
						<div className="flex flex-col items-start">
							<a href="/projects" className="ml-10 mt-10">
								<h3 className="sub-text select-none text-2xl text-white border-b-2 hover:text-white hover:border-white inline-block">
									View Projects
								</h3>
							</a>
							<a href={pdf} target="_blank" className="ml-10 mt-10">
								<h3 className="sub-text select-none text-2xl text-white border-b-2 hover:text-white hover:border-white inline-block">
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
