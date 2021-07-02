import React, { Component } from "react";
import Parallax from "parallax-js";

export class TopBar extends Component {
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
			<div ref={(el) => (this.scene = el)} className="nav-index">
				<nav
					className="text-white sub-text flex justify-between pt-12 mr-6 ml-6 md:mr-16 md:ml-16 lg:ml-24 lg:mr-24"
					data-depth="0.05"
				>
					<a href="/" className=" main-text text-6xl">
						DP
					</a>
					<div className="flex justify-around w-64 lg:w-96">
						<a
							href="https://github.com/DevinParentice"
							target="_blank"
							className="pr-1"
						>
							<i className="fab fa-github-alt fa-3x text-white hover:text-white"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/devin-parentice-2372b4170/"
							target="_blank"
							className="pr-1 pl-1"
						>
							<i className="fab fa-linkedin-in fa-3x text-white hover:text-white"></i>
						</a>
						<a href="mailto:devinparentice@gmail.com" className="pl-1">
							<i className="fas fa-paper-plane fa-3x text-white hover:text-white"></i>
						</a>
					</div>
				</nav>
			</div>
		);
	}
}

export default TopBar;
