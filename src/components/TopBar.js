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
			<nav
				ref={(el) => (this.scene = el)}
				className="navbar z-10 flex flex-row justify-around w-screen xl:w-3/12 top-0 right-0 h-1 xl:pr-24 pt-16 fixed"
			>
				<a
					href="https://github.com/DevinParentice"
					target="_blank"
					className="nav-item"
					data-depth="0.10"
				>
					<i className="fab fa-github-alt fa-3x text-white hover:text-white"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/devin-parentice-2372b4170/"
					target="_blank"
					className="nav-item"
					data-depth="0.10"
				>
					<i className="fab fa-linkedin-in fa-3x text-white hover:text-white"></i>
				</a>
				<a
					onClick={() => {
						navigator.clipboard.writeText("devinparentice@gmail.com");
					}}
					className="nav-item"
					data-depth="0.10"
				>
					<i className="fas fa-paper-plane fa-3x text-white hover:text-white"></i>
				</a>
			</nav>
		);
	}
}

export default TopBar;
