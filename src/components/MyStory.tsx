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
          Building companies leads to{" "}
          <Text as="span" fontWeight="bold">
            unparalleled avenues of opportunity.
          </Text>
        </Text>
        <Text fontSize="md" mb={4}>
          I built my{" "}
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
            first software company
          </ChakraLink>{" "}
          when I was 18 where we raised hundreds of thousands from investors.
          Almost exactly a year later, on October 2022, it was acquired by a{" "}
          <ChakraLink
            href="https://x.com/MattEspoz/status/1578055365479915520"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            $50m company
          </ChakraLink>{" "}
          and integrated with their 1M+ userbase.
        </Text>

        <Text fontSize="md" mb={4}>
          Then in 2024, I started{" "}
          <ChakraLink
            href="https://halationstudio.co"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Halation
          </ChakraLink>{" "}
          – an empire that is building & buying internet companies. Our first
          portfolio company was{" "}
          <ChakraLink
            href="https://x.com/MattEspoz/status/1783184650933866734"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            Journey+
          </ChakraLink>{" "}
          which was built, scaled, and sold to private equity in 3 months. In
          the following eight months, we incubated three more companies with
          incredible operators.
        </Text>
        <Text fontSize="md" mb={4}>
          I share my learnings publicly on{" "}
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
            Twitter
          </ChakraLink>{" "}
          and{" "}
          <ChakraLink
            href="https://www.youtube.com/@mattespoz"
            isExternal
            textDecoration="underline"
            _hover={{
              color: "#9F7AEA",
              position: "relative",
              top: "-2px",
            }}
          >
            YouTube
          </ChakraLink>
          .
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
          <Box
            as="img"
            src="/assets/signature.png"
            alt="Cover image"
            width="35px"
            height="auto"
            mt={4}
            borderRadius="lg"
          />
        </Text>
      </Box>
    </Box>
  );
};

export default MyStorySection;
