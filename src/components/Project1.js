import React from "react";
import Parallax from "parallax-js";
import P1Images from "./P1Images";
import Project1About from "./Project1About";

class Project1 extends React.Component {
	componentDidMount() {
		this.parallax = new Parallax(this.scene, {
			pointerEvents: true,
		});
		this.parallax2 = new Parallax(this.scene2, {
			pointerEvents: true,
			relativeInput: true,
		});
	}

	componentWillUnmount() {
		this.parallax.disable();
		this.parallax2.disable();
	}

	render() {
		return (
			<section className="section h-screen flex items-center">
				<div ref={(el) => (this.scene = el)}>
					<div className="container slide" data-depth="0.10">
						<h2 className="relative main-text select-none text-6xl sm:text-9xl text-white ml-10 z-50">
							Cirillo's Artisan Pizza
						</h2>
						<div className="relative flex w-screen z-50">
							<a href="https://www.cirilloswestchester.com/" target="_blank">
								<h3 className="sub-text select-none text-2xl sm:text-4xl text-white ml-10 border-b-2 hover:text-white hover:border-white">
									View Site
								</h3>
							</a>
							<a
								href="https://github.com/DevinParentice/cirillos-pizza"
								target="_blank"
							>
								<h3 className="sub-text select-none text-2xl sm:text-4xl text-white ml-10 border-b-2 hover:text-white hover:border-white">
									View Code
								</h3>
							</a>
						</div>
						<div
							ref={(el) => (this.scene2 = el)}
							className="absolute top-2 z-0"
						>
							<P1Images />
						</div>
					</div>
					<Project1About />
				</div>
			</section>
		);
	}
}

export default Project1;
