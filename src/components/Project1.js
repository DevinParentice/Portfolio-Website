import React from 'react';
import Parallax from 'parallax-js';
import P1Images from './P1Images';
class Project1 extends React.Component {
	
	componentDidMount() {
		this.parallax = new Parallax(this.scene);
	}

	componentWillUnmount() {
		this.parallax.disable();
	}
	
	render() {
		return (
			<section ref={el => this.scene = el} className="flex w-screen h-screen items-center">
				<div className="container z-10" data-depth="0.20">
					<h1 className="main-text text-6xl sm:text-9xl text-white ml-8">Cirillo's Artisan Pizza</h1>
					<div className="flex">
						<a href="https://www.cirilloswestchester.com/" target="_blank">
							<h3 className="main-text text-2xl sm:text-4xl text-white ml-8 border-b-2 hover:text-gray-400 hover:border-gray-400">View Site</h3>
						</a>
						<a href="https://github.com/DevinParentice/cirillos-pizza" target="_blank">
							<h3 className="sub-text text-2xl sm:text-4xl text-white ml-8 border-b-2 hover:text-gray-400 hover:border-gray-400">View Code</h3>
						</a>
					</div>
				</div>
				<div className="container" data-depth="0.40">
					<P1Images />
				</div>
			</section>
		);
	}
}

export default Project1
