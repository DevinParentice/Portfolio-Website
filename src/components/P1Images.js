import React from "react";
import pizzagirl from "../images/pizza-girl-final.png";

export default class P1Images extends React.Component {
	render() {
		return (
			<div className="pt-6 ml-96 mt-8" data-depth="0.15">
				<img
					src={pizzagirl}
					draggable="false"
					alt="Girl eating pizza"
					className="absolute hidden sm:block flex-shrink-0 select-none mr-96 sm:mr-0 sm:ml-24 mt-96 sm:mt-48 md:mt-16 xl:mt-0 xl:ml-96"
				></img>
			</div>
		);
	}
}
