import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import { SiteLayout } from "../src/components/layout";
import { djinTheme } from "../src/mui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={djinTheme}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  );
}
