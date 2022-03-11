import "../styles/globals.css";
import type { AppProps } from "next/app";

import BasicLayout from "@layouts/basic-layout";

import { Provider as ReduxProvider } from "react-redux";
import store from "@store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ReduxProvider>
  );
}

export default MyApp;
