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
      <Flex direction={{ base: "column", md: "row" }} mt={10}>
        <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
          <ProjectCard
            title="Agora Labs (acq.)"
            description="Token-gate and reward early supporters"
            demoUrl="https://www.agoralabs.xyz/"
            tag="Featured"
          />
        </Box>
        <Box flex="1" mb={6}>
          <ProjectCard
            title="Journey+ (acq.)"
            description="The First Midjourney-powered Interface"
            demoUrl="https://www.imagineplus.ai/"
            tag="Stealth"
          />
        </Box>
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
