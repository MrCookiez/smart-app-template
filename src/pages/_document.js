/* eslint-disable react/no-danger */
/* eslint-disable react/react-in-jsx-scope */
import React, { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { AppRegistry } from "react-native";

const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const appName = "smart-app-template!!";
const language = "en";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(appName, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(appName);
    const page = renderPage();
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ];

    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html lang={language} style={{ height: "100%" }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{ height: "100%", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
