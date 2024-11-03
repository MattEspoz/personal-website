import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Heading as="h1" size="lg" mb={4} mt={8}>
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
          Projects
        </Box>
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
        🛠️ tools & experiments
      </Text>
      <Flex direction="column" mt={10}>
        {/* First Row */}
        <Flex direction={{ base: "column", md: "row" }} mb={1}>
          <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
            <ProjectCard
              title="1Price.co"
              description="Price experiments on autopilot"
              demoUrl="https://1price.co"
              tag="Featured"
            />
          </Box>
          <Box flex="1" mb={6}>
            <ProjectCard
              title="Halation"
              description="Holdco for next-gen internet products"
              demoUrl="https://halationstudio.co"
              tag="Active"
            />
          </Box>
        </Flex>
        {/* Second Row */}
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
            <ProjectCard
              title="Agora Labs (acq.)"
              description="Token-gate and reward early supporters"
              demoUrl="https://www.agoralabs.xyz/"
              tag="Sold"
            />
          </Box>
          <Box flex="1" mb={6}>
            <ProjectCard
              title="Journey+ (acq.)"
              description="The first Midjourney-powered interface"
              demoUrl="https://x.com/MattEspoz/status/1783184650933866734"
              tag="Sold"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex justify="flex-end" mb={8}>
        <Link color="gray.500" href="https://github.com/MattEspoz">
          [ View All Projects ]
        </Link>
      </Flex>
    </Box>
  );
};

export default Projects;
