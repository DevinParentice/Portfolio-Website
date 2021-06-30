import React from "react";

export default function ProjectCards() {
	return (
		<div className="2xl:ml-48 2xl:mr-48">
			<h2 className="project-list-title text-white sub-text text-center md:text-left mt-40 text-6xl select-none">
				Other Projects
			</h2>
			<hr />
			<div className="flex flex-wrap justify-center select-none">
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					<div className="flex flex-col">
						<div className="card-links flex justify-end mt-6 pr-6">
							<a
								href="https://github.com/DevinParentice/TriviaBot"
								className="ml-4"
								target="_blank"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Trivia Solver</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
								omnis tenetur nihil soluta ducimus ab amet, quam necessitatibus
								dolorum?
							</p>
						</div>
						<div className="card-tech-stack pl-6 pr-6 bottom-1.5">
							<ul className="flex italic">
								<li>Python</li>
								<li className="ml-4">Beautiful Soup</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					<div className="flex flex-col">
						<div className="card-links flex justify-end mt-6 pr-6">
							<a
								href="https://www.devinparentice.com"
								className="ml-4"
								target="_blank"
							>
								<i className="fas fa-external-link-alt fa-lg"></i>
							</a>
							<a
								href="https://github.com/DevinParentice/Portfolio-Website"
								className="ml-4"
								target="_blank"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Portfolio Website</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
								omnis tenetur nihil soluta ducimus ab amet, quam necessitatibus
								dolorum?
							</p>
						</div>
						<div className="card-tech-stack pl-6 pr-6 bottom-1.5">
							<ul className="flex italic">
								<li>React</li>
								<li className="ml-4">Tailwind CSS</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					test
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					test
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					test
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					test
				</div>
			</div>
		</div>
	);
}
