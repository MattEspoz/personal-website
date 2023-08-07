// _app.tsx
import HorizontalLine from "@/components/HorizontalLine";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import theme from "@/styles/theme"; // Import the custom theme
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="gradient" />

      <ChakraProvider theme={theme}>
        <div className="container">
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
