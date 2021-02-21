import React from "react";
import pizzagirl from "../images/pizza-girl-final.png";

export default class P1Images extends React.Component {
	render() {
		return (
			<div className="pt-6 ml-96 mt-8" data-depth="0.20">
				<img
					src={pizzagirl}
					draggable="false"
					alt="Girl eating pizza"
					className="absolute select-none ml-96"
				></img>
			</div>
		);
	}
}
