import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import SiteLayoutPages from "../src/components/layout/SiteLayoutPages";
import { djinTheme } from "../src/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={djinTheme}>
      <SiteLayoutPages>
        <Component {...pageProps} />
      </SiteLayoutPages>
    </ThemeProvider>
  );
}
