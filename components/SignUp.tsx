import React from "react";

const SignUp = () => {
	return (
		<section className="text-gray-600 body-font relative" id="login">
			<div className="container px-5 py-24 mx-auto flex">
				<div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
					<h2 className="text-gray-900 text-xl mb-1 font-medium title-font mx-auto">
						Log In
					</h2>
					<p className="leading-relaxed mb-5 text-gray-600 mx-auto">
						Post-ironic portland shabby chic echo park, banjo
						fashion axe
					</p>
					<div className="relative mb-4">
						<label
							htmlFor="email"
							className="leading-7 text-sm text-gray-600"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="password"
							className="leading-7 text-sm text-gray-600"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Button
					</button>
					<p className="text-xs text-gray-500 mt-3">
						Chicharrones blog helvetica normcore iceland tousled
						brook viral artisan.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
