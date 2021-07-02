import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function ContactForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const toastifySuccess = () => {
		toast.dark("Email sent!", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: "submit-feedback success",
			toastId: "notifyToast",
		});
	};

	const onSubmit = async (data) => {
		try {
			const templateParams = {
				name: data.name,
				email: data.email,
				subject: data.subject,
				message: data.message,
			};
			await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			);
			reset();
			toastifySuccess();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div
			className="form bg-black p-12 md:p-16 lg:p-24 rounded-xl text-white max-w-full"
			data-depth="0.10"
		>
			<div>
				<h3 className="text-white main-text select-none text-4xl lg:text-6xl text-center mb-6">
					Contact Me
				</h3>
				<form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
					{/* Row 1 of form */}
					<div className="flex flex-col md:flex-row pb-8">
						<div className="flex flex-col pb-4 md:pb-0">
							{errors.name && (
								<span className="errorMessage">{errors.name.message}</span>
							)}
							<input
								type="text"
								name="name"
								{...register("name", {
									required: "Required",
								})}
								className="form-control formInput bg-gray-900 rounded-sm pl-4 pr-4 pt-2 pb-2 text-white"
								placeholder="Name"
							/>
						</div>
						<div className="flex flex-col md:pl-12">
							{errors.email && (
								<span className="errorMessage">
									Please enter a valid email address
								</span>
							)}
							<input
								type="email"
								name="email"
								{...register("email", {
									required: true,
									pattern:
										/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								})}
								className="form-control formInput bg-gray-900 rounded-sm pl-4 pr-4 pt-2 pb-2 text-white"
								placeholder="Email address"
							></input>
						</div>
					</div>
					{/* Row 2 of form */}
					<div className="row formRow">
						<div className="flex flex-col">
							{errors.subject && (
								<span className="errorMessage">{errors.subject.message}</span>
							)}
							<input
								type="text"
								name="subject"
								{...register("subject", {
									required: {
										value: true,
										message: "Please enter a subject",
									},
									maxLength: {
										value: 75,
										message: "Subject cannot exceed 75 characters",
									},
								})}
								className="form-control formInput w-full bg-gray-900 rounded-sm pl-4 pr-4 pt-2 pb-2 mb-8 text-white"
								placeholder="Subject"
							></input>
						</div>
					</div>
					{/* Row 3 of form */}
					<div className="row formRow">
						<div className="flex flex-col">
							{errors.message && (
								<span className="errorMessage">Please enter a message</span>
							)}
							<textarea
								rows={3}
								name="message"
								{...register("message", {
									required: true,
								})}
								className="form-control formInput w-full bg-gray-900 rounded-sm pl-4 pr-4 pt-2 pb-2 text-white"
								placeholder="Message"
							></textarea>
						</div>
					</div>
					<button
						className="submit-btn bg-gray-900 rounded-sm pl-4 pr-4 pt-2 pb-2 mt-6 text-white"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
}
