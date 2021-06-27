import React from "react";
import Parallax from "parallax-js";
import pizza_image from "../images/pizza-girl-final.png";

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
			<section className="min-h-screen">
				<div ref={(el) => (this.scene = el)}>
					<div className="container" data-depth="0.10">
						<h2 className="project-list-title text-white sub-text pt-60">
							Projects I've Built
						</h2>
						<ul className="project-list list-none">
							<li className="featured-project mb-24 grid gap-2.5 grid-cols-12 items-center">
								<div className="project-content col-start-7 col-end--1 text-right relative ">
									<h3 className="project-title text-white sub-text mb-5">
										MovieMagic
									</h3>
									<div className="project-description sub-text text-white z-20 p-6 bg-black rounded">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Voluptas laboriosam distinctio officia culpa, voluptate
										blanditiis cupiditate quidem ex laudantium quibusdam,
										nesciunt quas itaque illum omnis. Sint suscipit quaerat
										voluptatem!
									</div>
									<ul className="project-tech-stack flex justify-end list-none flex-wrap text-white sub-text mt-6 mb-2.5">
										<li>Next.js</li>
										<li>Typescript</li>
										<li>Sass</li>
									</ul>
									<div className="project-links flex text-white justify-end items-center mt-2.5 -mr-2.5">
										<a href="https://moviemagic.dev" className="p-2.5 mr-3">
											<i className="fas fa-globe fa-2x"></i>
										</a>
										<a
											href="https://github.com/DevinParentice/movie-magic"
											className="p-2.5 ml-3"
										>
											<i className="fas fa-code fa-2x"></i>
										</a>
									</div>
								</div>
								<div className="project-image">
									<img src={pizza_image} alt="Girl holding pizza" />
								</div>
							</li>
							<li className="featured-project">
								<div className="project-content">
									<h3 className="project-title"></h3>
									<div className="project-description"></div>
									<ul className="project-tech-stack"></ul>
									<div className="project-links"></div>
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
