// _app.tsx
import HorizontalLine from "@/components/HorizontalLine";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UpdateBanner from "@/components/layout/UpdateBanner";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add("background-image");
    return () => {
      document.body.classList.remove("background-image");
    };
  }, []);

  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="container">
          {/* <UpdateBanner /> */}
          <Header />
          <HorizontalLine />
          <Component {...pageProps} />

          <HorizontalLine />
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}
