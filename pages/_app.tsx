import type { AppProps } from "next/app";
import { Menu } from "../components";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Menu />
        <GlobalStyle />
        <Component {...pageProps} /> <div id="modal-root"></div>
      </ThemeProvider>
    </>
  );
}
