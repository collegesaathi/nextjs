import '../styles/globals.css';
import "./style.css";
import "../styles/calendar.css";
import "../styles/Loader.css";

import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { RoleProvider } from "@/context/RoleContext";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* 🔹 Basic SEO */}
        <title>CollegeSathi | Find Colleges, Courses & Admissions</title>
        <meta name="description" content="CollegeSathi helps students find the best colleges, courses, scholarships, and admission guidance in India." />
        <meta name="keywords" content="colleges in india, college admission, online courses, scholarships, university finder" />
        <meta name="author" content="CollegeSathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔹 Indexing (ENABLE FOR SEO) */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* 🔹 Canonical */}
        <link rel="canonical" href="https://indiaprograms.com/" />

        {/* 🔹 Open Graph (Facebook / LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CollegeSathi | Find Colleges & Courses" />
        <meta property="og:description" content="Search colleges, compare courses, check eligibility and apply easily with CollegeSathi." />
        <meta property="og:url" content="https://www.collegesathi.com/" />
        <meta property="og:image" content="https://www.collegesathi.com/og-image.jpg" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CollegeSathi | College Admission Platform" />
        <meta name="twitter:description" content="Discover top colleges, courses and scholarships across India." />
        <meta name="twitter:image" content="https://www.collegesathi.com/og-image.jpg" />

        {/* 🔹 Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* 🔹 Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      {/* 🔹 Page Loading Indicator */}
      <NextNProgress
        color="#EC1E24"
        height={3}
        options={{ showSpinner: false }}
      />

      {/* 🔹 Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontSize: "14px" },
        }}
      />

      {/* 🔹 Context Provider */}
      <RoleProvider>
        <Component {...pageProps} />
      </RoleProvider>
    </>
  );
}
