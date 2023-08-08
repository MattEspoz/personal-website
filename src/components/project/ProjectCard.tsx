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

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  tag,
}) => {
  const isFeatured = tag === "Featured";

  return (
    <Card width="100%" borderRadius="lg" overflow="hidden">
      <Box position="relative">
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
        <Flex justify="space-between" align="center">
          <Link href={demoUrl} passHref>
            <LinkOverlay>
              <Button
                size="xs"
                colorScheme="purple"
                bg="purple.300"
                _hover={{ bg: "purple.500", color: "white" }}
              >
                View Demo
              </Button>
            </LinkOverlay>
          </Link>
          <Text
            fontSize="xs"
            color={isFeatured ? "#653E02" : "gray.500"}
            bg={
              isFeatured
                ? "linear-gradient(to right, #FED79C, #FDEBA8)"
                : "transparent"
            }
            borderRadius="md"
            px={2}
            py={1}
            fontWeight="bold"
          >
            {tag}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
