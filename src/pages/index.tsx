// pages/index.tsx
import AboutSection from "@/components/About";
import HorizontalLine from "@/components/HorizontalLine";
import MyStory from "@/components/MyStory";
import ProfileSection from "@/components/ProfileSection";
import Projects from "@/components/project/Projects";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Matt Espinoza // @mattespoz</title>
        <meta
          name="description"
          content="Hi, I'm Matt. Welcome to my corner of the internet"
        />
        <meta property="og:title" content="Matt Espinoza // @mattespoz" />
        <meta
          property="og:description"
          content="Hi, I'm Matt. Welcome to my corner of the internet"
        />
        <meta property="og:image" content="/assets/cover-image2.png" />{" "}
        {/* Use the actual path to your image */}
        <meta property="og:image:width" content="1200" />{" "}
        {/* Replace with actual width */}
        <meta property="og:image:height" content="630" />{" "}
        {/* Replace with actual height */}
        <meta property="og:url" content="https://matthewespinoza.com/" />{" "}
        {/* Replace with actual URL */}
        <meta property="og:type" content="https://matthewespinoza.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileSection />
      <HorizontalLine />
      <MyStory />
      {/* <HorizontalLine />
      <AboutSection /> */}
      <HorizontalLine />
      <Projects />
    </div>
  );
}
