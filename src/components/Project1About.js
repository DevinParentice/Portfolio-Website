import React from "react";

export class Project1About extends React.Component {
	render() {
		return (
			<div className="container slide" data-depth="0.20">
				<h1 className="main-text select-none text-6xl sm:text-9xl text-white ml-10">
					About Cirillo's
				</h1>
				<div className="flex">
					<a href="#" rel="noopener noreferrer" target="_blank">
						<h3 className="sub-text select-none text-2xl sm:text-4xl text-white ml-10 border-b-2 hover:text-white hover:border-wite">
							View Resume
						</h3>
					</a>
				</div>
			</div>
		);
	}
}

export default Project1About;
