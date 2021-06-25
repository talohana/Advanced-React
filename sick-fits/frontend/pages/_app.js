import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { Page } from "../components/Page";
import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeComplete", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
