import React from "react";
import ContactForm from "./ContactForm";
import TopBar from "./TopBar";
import Parallax from "parallax-js";
import CELLS from "vanta/dist/vanta.cells.min";

class ContactFormContainer extends React.Component {
	constructor() {
		super();
		this.vantaRef = React.createRef();
	}

	componentDidMount() {
		this.parallax = new Parallax(this.scene, {
			pointerEvents: true,
		});
		this.vantaEffect = CELLS({
			el: this.vantaRef.current,
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			scale: 1.0,
			color1: 0x0,
			color2: 0x252525,
			size: 5.0,
			speed: 1.0,
		});
	}

	componentWillUnmount() {
		if (this.vantaEffect) this.vantaEffect.destroy();
		this.parallax.disable();
	}

	render() {
		return (
			<div className="vanta" ref={this.vantaRef}>
				<TopBar />
				<section>
					<div
						ref={(el) => (this.scene = el)}
						className="form-container min-h-screen flex -mt-32 justify-center items-center"
					>
						<ContactForm />
					</div>
				</section>
			</div>
		);
	}
}

export default ContactFormContainer;
