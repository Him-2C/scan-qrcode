import { AppProps } from "next/app";
import { FunctionComponent } from "react";
import "../styles/globals.css";
import "../styles/normalize.css";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
