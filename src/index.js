import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import classNames from "classnames";
import App from "./App";

const isMobile = () => {
	const ua = navigator.userAgent;
	return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [clicked, setClicked] = useState(false);
	const [linkHovered, setLinkHovered] = useState(false);
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const addEventListeners = () => {
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseenter", onMouseEnter);
			document.addEventListener("mouseleave", onMouseLeave);
			document.addEventListener("mousedown", onMouseDown);
			document.addEventListener("mouseup", onMouseUp);
		};
		addEventListeners();
		const handleLinkHoverEvents = () => {
			document.querySelectorAll("a").forEach((el) => {
				if (el.hasAttribute("class") && !el.classList.contains("active")) {
					el.addEventListener("mouseover", () => setLinkHovered(true));
					el.addEventListener("mouseout", () => setLinkHovered(false));
				}
			});
		};
		handleLinkHoverEvents();
		return () => {
			const removeEventListeners = () => {
				document.removeEventListener("mousemove", onMouseMove);
				document.removeEventListener("mouseenter", onMouseEnter);
				document.removeEventListener("mouseleave", onMouseLeave);
				document.removeEventListener("mousedown", onMouseDown);
				document.removeEventListener("mouseup", onMouseUp);
			};
			removeEventListeners();
		};
	}, []);

	const onMouseMove = (e) => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	const onMouseDown = () => {
		setClicked(true);
	};

	const onMouseUp = () => {
		setClicked(false);
	};

	const onMouseLeave = () => {
		setHidden(true);
	};

	const onMouseEnter = () => {
		setHidden(false);
	};

	const cursorClasses = classNames("cursor", {
		"cursor-clicked": clicked,
		"cursor-hidden": hidden,
		"cursor-link-hovered": linkHovered,
	});

	if (typeof navigator !== "undefined" && isMobile()) {
		return null;
	}

	return (
		<div
			className={cursorClasses}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}
		/>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Cursor />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
