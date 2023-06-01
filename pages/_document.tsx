import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Citibanamex</title>
        <link rel="icon" href={"/fav.png"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
