import "../styles/globals.css";
import type { AppProps } from "next/app";

// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <CssBaseline/>
        <Component {...pageProps} />
    </>
  );
}
