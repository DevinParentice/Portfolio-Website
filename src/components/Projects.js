import React from "react";
import Parallax from "parallax-js";
import CELLS from "vanta/dist/vanta.cells.min";
import moviemagic from "../images/moviemagic.gif";
import eritea from "../images/eritea.gif";
import ProjectCards from "./ProjectCards";
import ReactFreezeframe from "react-freezeframe";
import TopBar from "./TopBar";

class Project1 extends React.Component {
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
				<section className="min-h-screen ml-6 mr-6">
					<div ref={(el) => (this.scene = el)}>
						<div
							className="xl:pl-24 xl:pr-24 ml-auto mr-auto"
							data-depth="0.10"
						>
							<h2 className="project-list-title text-white main-text text-center md:text-left pt-16 md:pt-32 text-6xl select-none">
								Projects I've Built
							</h2>
							<hr />
							<ul className="project-list list-none mt-12">
								<li className="featured-project mb-24 flex flex-col-reverse lg:flex-row-reverse justify-between flex-wrap lg:flex-nowrap">
									<div className="project-content text-center md:text-right lg:w-2/3 xl:w-1/3">
										<h3 className="project-title text-white sub-text select-none mb-5 text-4xl pt-4 md:pt-0">
											1. MovieMagic
										</h3>
										<div className="project-description sub-text text-white text-lg select-none z-30 p-6 ml-6 bg-black rounded">
											<p>
												A website for finding movies in a more human way. Search
												by actors, directors, producers, genres, release date,
												ratings and more! View details about movies and
												directors as well.
											</p>
										</div>
										<ul className="project-tech-stack flex justify-center md:justify-end list-none flex-wrap text-white sub-text text-2xl select-none mt-6 mb-2.5">
											<li>Next.js</li>
											<li>Typescript</li>
											<li>Sass</li>
										</ul>
										<div className="project-links flex text-white justify-center md:justify-end items-center mt-2.5 -mr-2.5">
											<a
												href="https://moviemagic.dev"
												className="p-2.5 mr-3"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fas fa-external-link-alt fa-2x"></i>
											</a>
											<a
												href="https://github.com/DevinParentice/movie-magic"
												className="p-2.5 ml-3"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fas fa-code fa-2x"></i>
											</a>
										</div>
									</div>
									<div className="project-image z-0 rounded-lg overflow-hidden select-none">
										<ReactFreezeframe
											src={moviemagic}
											options={{ overlay: true }}
										/>
									</div>
								</li>
								<li className="featured-project mb-24 flex flex-col-reverse lg:flex-row-reverse justify-between flex-wrap lg:flex-nowrap">
									<div className="project-content text-center md:text-right lg:w-2/3 xl:w-1/3">
										<h3 className="project-title text-white sub-text select-none mb-5 text-4xl pt-4 md:pt-0">
											2. EriTea
										</h3>
										<div className="project-description sub-text text-white text-lg select-none z-30 p-6 ml-6 bg-black rounded">
											<p>
												Developed a website for EriTea, a drink brand start up.
												Features a way for customers to order their tea and read
												the company's story.
											</p>
										</div>
										<ul className="project-tech-stack flex justify-center md:justify-end list-none flex-wrap text-white sub-text text-2xl select-none mt-6 mb-2.5">
											<li>Liquid</li>
											<li>JavaScript</li>
											<li>Sass</li>
										</ul>
										<div className="project-links flex text-white justify-center md:justify-end items-center mt-2.5 -mr-2.5">
											<a
												href="https://drinkeritea.com/"
												className="p-2.5 mr-3"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fas fa-external-link-alt fa-2x"></i>
											</a>
											<a
												href="https://github.com/DevinParentice/EriTea"
												className="p-2.5 ml-3"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fas fa-code fa-2x"></i>
											</a>
										</div>
									</div>
									<div className="project-image z-0 rounded-lg overflow-hidden select-none">
										<ReactFreezeframe
											src={eritea}
											options={{ overlay: true }}
										/>
									</div>
								</li>
							</ul>
							<ProjectCards />
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Project1;
