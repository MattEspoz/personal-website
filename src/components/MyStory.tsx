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
    color: colorMode === "light" ? "teal" : "white",
    _hover: {
      color: colorMode === "light" ? "purple" : "white",
      position: "relative",
      top: "-2px",
    },
  };

  return (
    <Box py={8} {...myStorySectionStyles}>
      <Box>
        <Heading as="h1" size="lg" mb={4}>
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
        <Text fontSize="md" mb={4}>
          It all started with building side projects.
        </Text>
        <Text fontSize="md" mb={4}>
          I wrote my first line of code in high school, explored basic
          full-stack & IOS development, participated in hackathons, and secured
          a handful of SWE internships. Little did I know that this journey
          would lead me to the realm of startups.
        </Text>
        <Text fontSize="md" mb={4}>
          Early on, I learned a crucial lesson –{" "}
          <Text as="span" fontWeight="bold">
            the act of consistently building projects leads to unparalleled
            avenues of opportunity.
          </Text>
        </Text>
        <Text fontSize="md" mb={4}>
          This philosophy paved the way for individuals to believe in my early
          potential. From being the inaugural engineer/growth lead at{" "}
          <ChakraLink
            href="https://tryvirtually.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Virtually
          </ChakraLink>{" "}
          during{" "}
          <ChakraLink
            href="http://ycombinator.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Y Combinator&apos;s 2020 cohort
          </ChakraLink>
          , to becoming the youngest engineer at a{" "}
          <ChakraLink
            href="http://techstars.com/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Techstars-backed startup
          </ChakraLink>
          .
        </Text>
        <Text fontSize="md" mb={4}>
          Amid my exploration in tech, I somehow stumbled into the world of
          crypto. First as an investor, and then eventually as a builder. With
          the rise of the web3 social token space, I built{" "}
          <ChakraLink
            href="https://agoralabs.xyz/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Agora Labs
          </ChakraLink>{" "}
          — a platform that pioneered the way for creators to connect their
          tokens and choose specific rewards and perks for their supporters.
        </Text>
        <Text fontSize="md" mb={4}>
          Within weeks of launching, we reached a market cap of over $500K USD.
          We later raised hundreds of thousands from investors including the{" "}
          <ChakraLink
            href="https://www.coindesk.com/business/2021/10/05/deso-launches-50m-fund-for-decentralized-social-ecosystem/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
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
              color: "teal",
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
              color: "teal",
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
              color: "teal",
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
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Talent Protocol
          </ChakraLink>{" "}
          in which I lead the charge there on tokenomics as we geared up for the
          public launch of $TAL.
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
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Buildergroop
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://www.1517.org/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            1517
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://www.socratica.info/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Socratica
          </ChakraLink>
          ,{" "}
          <ChakraLink
            href="https://www.safary.club/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
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
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            Inner Circle
          </ChakraLink>
          .
        </Text>
        <Text fontSize="md" mb={4}>
          As of recently, I spent 10-weeks in NYC, being 1 of the 13 hackers
          selected as part of the{" "}
          <ChakraLink
            href="http://hackny.org/"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
              position: "relative",
              top: "-2px",
            }}
          >
            hackNY fellowship
          </ChakraLink>
          . Now, back in Toronto, I&apos;m gearing up to wrap up my final two
          semesters of university before I return to the US to embark full-time
          on my next venture.
        </Text>
        <Text fontSize="md">
          You can find me at{" "}
          <ChakraLink
            href="https://twitter.com/mattespoz"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "teal",
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
