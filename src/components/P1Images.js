import React from "react";
import pizzagirl from "../images/pizza-girl-final.png";

export default class P1Images extends React.Component {
	render() {
		return (
			<div className="pt-6 ml-96 mt-8 z-0 relative" data-depth="0.1">
				<img
					data-src={pizzagirl}
					draggable="false"
					alt="Girl eating pizza"
					className="relative hidden sm:block flex-shrink-0 select-none mr-96 sm:mr-0 sm:ml-24 mt-96 sm:mt-48 md:mt-16 xl:mt-0 xl:ml-96 z-0"
				></img>
			</div>
		);
	}
}
