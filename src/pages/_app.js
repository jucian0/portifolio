import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Juciano C Barbosa - Web development</title>
        <meta
          name="description"
          content="Hey there, This is Juciano. I am a software developer focused on
          frontend technologies, like React, Angular, Solid, and more..."
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
