import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const MyStorySection = () => {
  const { colorMode } = useColorMode();

  const myStorySectionStyles = {
    color: colorMode === "light" ? "black" : "white",
  };

  const linkStyles = {
    color: colorMode === "light" ? "#9F7AEA" : "white",
    _hover: {
      color: colorMode === "light" ? "purple" : "white",
      position: "relative",
      top: "-2px",
    },
  };

  return (
    <Box py={8} {...myStorySectionStyles}>
      <Box>
        {/* <Heading as="h1" size="lg" mb={4}>
          <Box
            as="span"
            bgGradient={
              colorMode === "light"
                ? "linear(to-r, #6B46C1, #205AD5)"
                : "linear(to-r, #A78BFA, #9F7AEA)" // Adjust the color values as needed
            }
            bgClip="text"
            display="inline"
          >
            My Story
          </Box>
        </Heading>
        
        <Text fontSize="sm" color="gray.500" mt={-3} mb={7}>
          🪄 where it all began...
        </Text>
        */}
        <Text fontSize="md" mb={4}>
          Early on, I learned a crucial lesson ~
        </Text>
        <Text fontSize="md" mb={4}>
          Building side projects leads to{" "}
          <Text as="span" fontWeight="bold">
            unparalleled avenues of opportunity.
          </Text>
        </Text>
        <Text fontSize="md" mb={4}>
          During my first year of University, I built{" "}
          <ChakraLink
            href="https://agoralabs.xyz/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Agora Labs
          </ChakraLink>{" "}
          — a platform that pioneered the way for anyone to create their own
          currency and reward early adopters.
        </Text>
        <Text fontSize="md" mb={4}>
          Within weeks of launching, we reached a market cap of over $500K USD.
          We later raised hundreds of thousands from investors including the{" "}
          <ChakraLink
            href="https://www.coindesk.com/business/2021/10/05/deso-launches-50m-fund-for-decentralized-social-ecosystem/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            DeSo Octane Fund
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://www.zfellows.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            ZFellows
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://www.envisionaccelerator.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Envision Accelerator
          </ChakraLink>
          , and{" "}
          <ChakraLink
            href="https://www.harmony.one/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Harmony Protocol
          </ChakraLink>{" "}
          amongst others. Almost exactly a year later, on October 2022, Agora
          Labs was acquired by{" "}
          <ChakraLink
            href="https://www.talentprotocol.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Talent Protocol
          </ChakraLink>{" "}
          and integrated with their 300K+ userbase.
        </Text>
        <Text fontSize="md" mb={4}>
          Through this journey, I found a sense of belonging by immersing myself
          in various tech communities where I met some of my current closest
          friends. Prominent among these communities were{" "}
          <ChakraLink
            href="https://www.buildergroop.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Buildergroop
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="http://hackny.org/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            hackNY
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://www.socratica.info/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Socratica
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://neo.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Neo
          </ChakraLink>
          , and{" "}
          <ChakraLink
            href="https://www.innercirclehq.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Inner Circle
          </ChakraLink>
          .
        </Text>
        <Text fontSize="md" mb={4}>
          Now I&apos;m building Halation – an empire that is building & buying
          internet companies. Currently it&apos;s fully self-funded and
          we&apos;ve had one major exit from it already. Launching 12 companies
          in 12 months with an absolutely cracked team.
        </Text>
        <Text fontSize="md">
          You can find me at{" "}
          <ChakraLink
            href="https://twitter.com/mattespoz"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            @mattespoz
          </ChakraLink>{" "}
          on the rest of the internet.
        </Text>
      </Box>
    </Box>
  );
};

export default MyStorySection;
