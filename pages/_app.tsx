import "../styles/globals.css";
import type { AppProps } from "next/app";

// Material UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { AppDrawer, AppToolBar } from "../components/home";

export default function App({ Component, pageProps }: AppProps) {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
      <AppDrawer
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
      <Component {...pageProps} />
    </>
  );
}
