import React, { useState } from "react";

import About from "@components/About";
import Head from "next/head";
import Hero from "@components/Hero";
import Pricing from "@components/Pricing";
import Services from "@components/Services";
import Testimonial from "@components/Testimonial";
import { shortURL } from "services/shortener";

const Home = () => {
	const [state, setState] = useState<string>("");
	const handleShortURL = async (event: any) => {
		event.preventDefault();
		await shortURL(event.target.name.value).then((res) =>
			setState(res.code)
		);
	};
	return (
		<>
			<Head>
				<title>Hexgo | Another URL Shortener Service for Free</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<Services />
			<Testimonial />
			<Pricing />
			<About />
		</>
	);
};
export default Home;
