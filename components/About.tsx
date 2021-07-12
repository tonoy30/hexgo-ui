import React from "react";

const About = () => {
	return (
		<section className="body-font relative bg-gray-100" id="about">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
						Contact Us
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn
						asymmetrical gentrify.
					</p>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="name"
									className="leading-7 text-sm"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="email"
									className="leading-7 text-sm "
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="message"
									className="leading-7 text-sm"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-32"
								></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
