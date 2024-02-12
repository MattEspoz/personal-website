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
            title="Ghostmode"
            description="AI for building LinkedIn Posts"
            demoUrl="https://ghostmode.ai/"
            tag="Featured"
          />
        </Box>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={3}>
        <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
          <ProjectCard
            title="MatchSync"
            description="Find Your Next Co-Founder"
            demoUrl="https://matchsync.ai/"
            tag="Personal Project"
          />
        </Box>
        <Box flex="1" mb={6}>
          <ProjectCard
            title="Journey+"
            description="The First Midjourney-powered Interface"
            demoUrl="https://www.journeyplus.ai/"
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
