import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const MyStorySection = () => {
  return (
    <Box py={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {/* Left Column */}
        <Box>
          <Heading as="h1" size="lg" mb={4}>
            <Box
              as="span"
              bgGradient="linear(to-r, #6B46C1, #205AD5)"
              bgClip="text"
              display="inline"
            >
              My Story
            </Box>
          </Heading>
          <Text fontSize="md" mb={4}>
            I built a couple side projects like this, and this, but I’m probably
            best known for being the prev. CEO of Agora Labs.
          </Text>
          <Text fontSize="md" mb={4}>
            I’ve raised hundreds of thousands of dollars to build my first
            startup (Agora Labs), taken part in accelerator programs, then
            scaled the platform to thousands of users alongside my best friends.
          </Text>
        </Box>

        {/* Right Column */}
        <Box>
          <Text fontSize="md" mb={4}>
            Almost exactly a year later, I sold Agora Labs to a company called
            Talent Protocol (a $50M company). After selling it, I worked at
            Talent Protocol as ‘Tokenomics Developer’ for a couple months
            leading the tokenomics in preparation for $TAL launch.
          </Text>
          <Text fontSize="md">
            The acquisition got me featured in publications including Forbes,
            Yahoo Finance, Bloomberg etc.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default MyStorySection;
