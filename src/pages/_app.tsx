import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider as ReduxProvider } from "react-redux";
import store from "@store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
