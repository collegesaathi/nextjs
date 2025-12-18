import '../styles/globals.css';
import "./style.css";
import "../styles/calendar.css";
import "../styles/Loader.css";
import { Toaster } from "react-hot-toast";
import { RoleProvider } from "@/context/RoleContext";
import NextNProgress from 'nextjs-progressbar';
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Head>
    <NextNProgress color="#EC1E24" />
    <Toaster
      toastOptions={{
        position: "top-right",
        className: "",
        style: {
          fontSize: "14px", 
        },
      }}
    />
    <RoleProvider>
      <Component {...pageProps} />
    </RoleProvider>
  </>;
}