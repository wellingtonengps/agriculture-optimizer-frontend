import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Menu } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Menu />
      <Component {...pageProps} /> <div id="modal-root"></div>
    </main>
  );
}

export default MyApp;
