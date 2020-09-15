import React from "react";
import Head from "next/head";
import App from "../containers/home";

export default function myApp() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <App />
    </>
  );
}
