import React from "react";
import Parallax from 'parallax-js';
import pdf from '../documents/DevinParenticeResume.pdf';

class SplashPage extends React.Component {
	
	componentDidMount() {
		this.parallax = new Parallax(this.scene);
	}

	componentWillUnmount() {
		this.parallax.disable();
	}

	render() {
		return (
			<div ref={el => this.scene = el} className="flex w-screen h-screen items-center">
				<div className="container" data-depth="0.20">
					<h1 className="main-text text-9xl text-white ml-8">Devin Parentice</h1>
					<a href={pdf} without rel="noopener noreferrer" target="_blank">
						<h3 className="main-text text-4xl text-white ml-8 border-b-2 hover:text-gray-400 hover:border-gray-400">View Resume</h3>
					</a>
				</div>
			</div>
		);
	}
}

export default SplashPage;
