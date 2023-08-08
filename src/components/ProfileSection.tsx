import { Box, Flex, Heading, HStack, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <Flex align="center" justify="center" height="60vh">
      {/* Left Column: Photo and Icons */}
      <Flex direction="column" align="center" justify="center" flex="2">
        <Box
          width="200px"
          height="200px"
          borderRadius="50%"
          boxShadow="lg"
          overflow="hidden"
          position="relative"
          className="profile-image"
        >
          <Image
            src="/assets/main.jpeg"
            alt="Matt's Profile"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <HStack mt={4} spacing={2}>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            fontSize="xl"
            size="sm"
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            fontSize="xl"
            size="sm"
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="xl"
            size="sm"
          />
        </HStack>
      </Flex>

      {/* Right Column: Text */}
      <Box flex="8" ml={8}>
        <Heading as="h1" size="xl" mb={4}>
          <span className="wave" role="img" aria-label="Waving Hand">
            👋
          </span>{" "}
          <Box
            as="span"
            bgGradient="linear(to-r, #6B46C1, #205AD5)"
            bgClip="text"
            display="inline"
          >
            Hey, I'm Matt.
          </Box>
        </Heading>
        <Text fontSize="sm" color="gray.500" mt="5px" mb="2px">
          Welcome to my corner of the internet...
        </Text>
        <Text fontSize="xl">
          I’m a full-stack developer passionate about{" "}
          <Box as="span" fontWeight="bold">
            building software to <u>impact millions.</u>
          </Box>
        </Text>

        {/* Purple Section */}
        <Text
          color="#6B46C1"
          mt={4}
          fontSize="md"
          fontWeight="bold"
          fontStyle="italic"
        >
          TL;DR: I’m a 21 y/o who sold his crypto company. Now I'm building
          something new
        </Text>

        {/* Gray Section */}
        <Text fontSize="xs" color="gray.500" mt={4}>
          Press: TechCrunch, Bloomberg, Yahoo News, CoinTelegraph, Toronto Star,
          Collision
        </Text>
      </Box>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
        }

        .wave {
          display: inline-block;
          animation-name: wave-animation;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </Flex>
  );
};

export default ProfileSection;
