import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import "@styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Provider store={store}>
		<Header />
		<main>
			<Component {...pageProps} />
		</main>
		<Footer />
	</Provider>
);

export default MyApp;
