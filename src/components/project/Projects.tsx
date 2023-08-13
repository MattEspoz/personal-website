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
            title="🥇 Agora Labs (acq.)"
            description="Platform for web3 creators to token-gate and reward early supporters. Built on DeSo blockchain. Acquired by Talent Protocol."
            imageUrl="/projects/P1-Agora.png"
            demoUrl="https://www.agoralabs.xyz/"
            tag="Featured"
          />
        </Box>
        <Box flex="1" mb={6}>
          <ProjectCard
            title="🤝 GenQuote"
            description="Auto-generated Twitter suggestions for posts. Easily connect your account and get ideas for new posts."
            imageUrl="/projects/P2-GenQuote.png"
            demoUrl="https://mattespoz.github.io/quote-generator"
            githubUrl="https://github.com/MattEspoz/quote-generator"
            tag="Featured"
          />
        </Box>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={10}>
        <Box flex="1" mb={6} mr={{ base: 0, md: 6 }}>
          <ProjectCard
            title="👱‍♂️ FaceX"
            description="Full-stack app for detecting faces in photos with sign-in features and mobile responsiveness, using Clarifai API."
            imageUrl="/projects/P3-FaceX.png"
            demoUrl="https://solana-gif-marketplace.vercel.app/"
            githubUrl="https://github.com/MattEspoz/face-recognition-brain"
            tag="Personal Project"
          />
        </Box>
        <Box flex="1" mb={6}>
          <ProjectCard
            title="👾 1Solana"
            description="Minimal Gif Solana marketplace with wallet sign-in, and transaction fees for every GIF added."
            imageUrl="/projects/P5-Solana.png"
            demoUrl="https://solana-gif-marketplace.vercel.app/"
            githubUrl="https://github.com/MattEspoz/solana-gif-marketplace"
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
