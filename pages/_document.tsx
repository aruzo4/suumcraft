import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="SuumCraft is network of servers with Survival, Hub, KitPvP, BedWars, SkyWars, Battle Royale and many more!"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="theme-color" content="#B725B7" />
          <meta name="apple-mobile-web-app-status-bar" content="#B725B7" />
          <meta
            name="google-site-verification"
            content="znyZzkp_NB4DFxfGojDiBBCsrsvu7n9DMlLyYEDEtwQ"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
