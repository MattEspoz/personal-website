// pages/index.tsx
import ProfileSection from "@/components/ProfileSection";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Matt Espinoza</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileSection />
    </div>
  );
}
