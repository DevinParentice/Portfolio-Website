import React from "react";

export default function ProjectCards() {
	return (
		<div className="2xl:ml-48 2xl:mr-48">
			<h2 className="project-list-title text-white main-text text-center md:text-left mt-40 text-6xl select-none">
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
								rel="noreferrer"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Trivia Solver</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								Scrapes the internet to predict the answer for a trivia question
								that the user provides.
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
								rel="noreferrer"
							>
								<i className="fas fa-external-link-alt fa-lg"></i>
							</a>
							<a
								href="https://github.com/DevinParentice/Portfolio-Website"
								className="ml-4"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Portfolio Website</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								A website to display my projects, host my resume and offer ways
								to contact me.
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
					<div className="flex flex-col">
						<div className="card-links flex justify-end mt-6 pr-6">
							<a
								href="https://github.com/DevinParentice/DogSMS"
								className="ml-4"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Dog SMS</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								A Flask App that sends a random dog that is recently up for
								adoption when a phone number is texted.
							</p>
						</div>
						<div className="card-tech-stack pl-6 pr-6 bottom-1.5">
							<ul className="flex italic">
								<li>Python</li>
								<li className="ml-4">Twilio</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					<div className="flex flex-col">
						<div className="card-title w-full flex text-white justify-between items-center mt-14 pl-6 pr-4">
							<h3 className="text-3xl">Hackathon Project</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								Simplified a nonprofit's sign up form in order to decrease user
								abandonment.
							</p>
						</div>
						<div className="card-tech-stack pl-6 pr-6 bottom-1.5">
							<ul className="flex italic">
								<li>Flask</li>
								<li className="ml-4">PostgreSQL</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					<div className="flex flex-col">
						<div className="card-links flex justify-end mt-6 pr-6">
							<a
								href="https://github.com/DevinParentice/Original-Portfolio-Website"
								className="ml-4"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Portfolio Site V1</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								My original portfolio website made in 2019 to display projects
								and host my resume.
							</p>
						</div>
						<div className="card-tech-stack pl-6 pr-6 bottom-1.5">
							<ul className="flex italic">
								<li>JavaScript</li>
								<li className="ml-4">Bootstrap</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-72 h-72 bg-black rounded m-5 sub-text text-white">
					<div className="flex flex-col">
						<div className="card-links flex justify-end mt-6 pr-6">
							<a
								href="https://github.com/DevinParentice/HashCracker"
								className="ml-4"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fas fa-code fa-lg"></i>
							</a>
						</div>
						<div className="card-title w-full flex text-white justify-between items-center mt-2 pl-6 pr-4">
							<h3 className="text-3xl">Hash Cracker</h3>
						</div>
						<div className="card-content pl-6 pr-6 pt-3 h-40">
							<p>
								A program to test your passwords to see how easy they are to
								crack. Able to brute force or use a dictionary.
							</p>
						</div>
						<div className="card-tech-stack pl-6 pr-6 bottom-1.5">
							<ul className="flex italic">
								<li>Python</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
