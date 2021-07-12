import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Link from "next/link";
import React from "react";
import { selectHideMenu } from "@store/features/routeSlice";
import { useAppSelector } from "@hooks/redux";
import { useRouter } from "next/router";

const Header = () => {
	const hideMenu = useAppSelector(selectHideMenu);
	const router = useRouter();

	const scrollToHome = () => {
		if (hideMenu) {
			router.push("/");
		} else {
			scroll.scrollToTop();
		}
	};

	return (
		<header className="text-gray-400 bg-gray-900 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a
					className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
					onClick={scrollToHome}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Hexgo</span>
				</a>
				{!hideMenu && (
					<>
						<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
							<ScrollLink
								to="services"
								spy={true}
								smooth={true}
								duration={400}
								className="mr-5 hover:text-white cursor-pointer"
							>
								Services
							</ScrollLink>
							<ScrollLink
								to="testimonials"
								spy={true}
								smooth={true}
								duration={500}
								className="mr-5 hover:text-white cursor-pointer"
							>
								Testimonials
							</ScrollLink>
							<ScrollLink
								to="pricing"
								spy={true}
								smooth={true}
								duration={600}
								className="mr-5 hover:text-white cursor-pointer"
							>
								Pricing
							</ScrollLink>
							<ScrollLink
								to="about"
								spy={true}
								smooth={true}
								duration={700}
								className="mr-5 hover:text-white cursor-pointer"
							>
								Contact
							</ScrollLink>
						</nav>
						<Link href="signup">
							<button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
								Sign Up
							</button>
						</Link>
						<Link href="login">
							<button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ml-3">
								Log In
							</button>
						</Link>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
