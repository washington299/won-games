import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Won Games</title>
				<meta name="description" content="The best Game Store in the world" />

				<link rel="shortcut icon" href="/logo.png" />
				<link rel="apple-touch-icon" href="/logo.png" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
