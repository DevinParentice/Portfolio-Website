import React from "react";
import pizzagirl from "../images/pizza-girl-final.png";

export default class P1Images extends React.Component {
	render() {
		return (
			<div className="ml-96 mt-8">
				<img
					src={pizzagirl}
					alt="Girl eating pizza"
					className="absolute select-none ml-96"
				></img>
			</div>
		);
	}
}
