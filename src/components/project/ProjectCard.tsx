import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl?: string; // Optional Github URL prop
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  tag,
}) => {
  const tagColors: { [key: string]: string } = {
    "Personal Project": "linear-gradient(to right, #9EFF9C, #9AFEDC)",
    Stealth: "linear-gradient(to right, #D3A4FF, #F2A5FD)",
    Featured: "linear-gradient(to right, #FED79C, #FDEBA8)",
  };

  const tagTextColor: { [key: string]: string } = {
    "Personal Project": "#056602",
    Stealth: "#390B66",
    Featured: "#653E02",
  };

  const backgroundGradient = tagColors[tag] || "transparent";
  const textColor = tagTextColor[tag] || "black";

  return (
    <Card width="100%" borderRadius="lg" overflow="hidden">
      <Box position="relative">
        {/* Tag on top corner */}
        <Text
          position="absolute"
          top="2"
          right="2"
          fontSize="xs"
          color={textColor}
          bg={backgroundGradient}
          borderRadius="md"
          px={2}
          py={1}
          fontWeight="bold"
          zIndex="1"
        >
          {tag}
        </Text>

        {/* Demo Image */}
        <Link href={demoUrl} passHref>
          <LinkOverlay>
            <div
              style={{
                width: "100%",
                paddingTop: "75%", // Set to achieve a 4:3 aspect ratio
                position: "relative",
              }}
            >
              <Image
                src={imageUrl}
                alt={`${title} Screenshot`}
                layout="fill" // Fill the container size
                objectFit="cover" // Maintain aspect ratio and cover the container
              />
            </div>
          </LinkOverlay>
        </Link>
      </Box>
      <CardBody>
        <Heading as="h4" size="md" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={3}>
          {description}
        </Text>
        <Flex justify="flex-start" align="center">
          {/* View Demo Button with External Link Icon */}
          <Link href={demoUrl} passHref>
            <LinkOverlay>
              <Button
                size="xs"
                colorScheme="purple"
                bg="purple.300"
                _hover={{ bg: "purple.500", color: "white" }}
                leftIcon={<FaExternalLinkAlt />} // External link icon
                mr={2}
              >
                View Demo
              </Button>
            </LinkOverlay>
          </Link>

          {/* Github Button with Github Icon */}
          {githubUrl && (
            <Link href={githubUrl} passHref>
              <LinkOverlay>
                <Button
                  size="xs"
                  colorScheme="white"
                  bg="#475668"
                  _hover={{ bg: "#2D3848", color: "white" }}
                  leftIcon={<FaGithub />} // Github icon
                >
                  Github
                </Button>
              </LinkOverlay>
            </Link>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
