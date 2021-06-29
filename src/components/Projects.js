import React from "react";
import Parallax from "parallax-js";
import moviemagic from "../images/moviemagic.gif";
import ReactFreezeframe from "react-freezeframe";

class Project1 extends React.Component {
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
			<section className="min-h-screen ml-6 mr-6">
				<div ref={(el) => (this.scene = el)}>
					<div className="sm:pl-24 sm:pr-24 ml-auto mr-auto" data-depth="0.10">
						<h2 className="project-list-title text-white sub-text pt-60 text-6xl select-none">
							Projects I've Built
						</h2>
						<hr />
						<ul className="project-list list-none mt-12">
							<li className="featured-project mb-24 flex flex-row-reverse justify-between flex-wrap lg:flex-nowrap">
								<div className="project-content text-right lg:w-2/3 xl:w-1/3">
									<h3 className="project-title text-white sub-text select-none mb-5 text-4xl">
										1. MovieMagic
									</h3>
									<div className="project-description sub-text text-white text-lg select-none z-30 p-6 ml-6 bg-black rounded">
										<p>
											{/* Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Voluptas laboriosam distinctio officia culpa, voluptate
											blanditiis cupiditate quidem ex laudantium quibusdam,
											nesciunt quas itaque illum omnis. Sint suscipit quaerat
											voluptatem! */}
											A website for finding movies in a more human way. Search
											by actors, directors, producers, genres, release date,
											ratings and more! You can view details about
										</p>
									</div>
									<ul className="project-tech-stack flex justify-end list-none flex-wrap text-white sub-text text-2xl select-none mt-6 mb-2.5">
										<li>Next.js</li>
										<li>Typescript</li>
										<li>Sass</li>
									</ul>
									<div className="project-links flex text-white justify-end items-center mt-2.5 -mr-2.5">
										<a
											href="https://moviemagic.dev"
											className="p-2.5 mr-3"
											target="_blank"
										>
											<i className="fas fa-external-link-alt fa-2x"></i>
										</a>
										<a
											href="https://github.com/DevinParentice/movie-magic"
											className="p-2.5 ml-3"
											target="_blank"
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
							<li className="featured-project mb-24 flex justify-between flex-wrap lg:flex-nowrap">
								<div className="project-content lg:w-2/3 xl:w-1/3">
									<h3 className="project-title text-white sub-text select-none mb-5 text-4xl">
										2. Cirillo's Artisan Pizza
									</h3>
									<div className="project-description sub-text text-white text-lg select-none z-30 p-6 mr-6 bg-black rounded">
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Voluptas laboriosam distinctio officia culpa, voluptate
											blanditiis cupiditate quidem ex laudantium quibusdam,
											nesciunt quas itaque illum omnis. Sint suscipit quaerat
											voluptatem!
										</p>
									</div>
									<ul className="project-tech-stack flex justify-start list-none flex-wrap text-white sub-text text-2xl select-none mt-6 mb-2.5">
										<li>Python</li>
										<li>Flask</li>
									</ul>
									<div className="project-links flex text-white justify-start items-center mt-2.5 -ml-2.5">
										<a
											href="https://moviemagic.dev"
											className="p-2.5 mr-3"
											target="_blank"
										>
											<i className="fas fa-external-link-alt fa-2x"></i>
										</a>
										<a
											href="https://github.com/DevinParentice/movie-magic"
											className="p-2.5 ml-3"
											target="_blank"
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
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Project1;
