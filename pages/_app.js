import "../stylus/style.css"


import HeaderBlock from "../components/HeaderBlock";

export default function MyApp({ Component, pageProps }) {
    return <>
        <HeaderBlock />
        <Component {...pageProps} />
        </>
  }