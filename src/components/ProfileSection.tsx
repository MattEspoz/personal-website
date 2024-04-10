import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import CalloutButton from "./CalloutButton";

const ProfileSection = () => {
  const { colorMode } = useColorMode();

  const [isHovered, setIsHovered] = useState(false); // Add this line

  const profileSectionStyles = {
    color: colorMode === "light" ? "black" : "white",
  };

  const linkStyles = {
    color: colorMode === "light" ? "#6B46C1" : "white",
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "center" }}
      justify="center"
      maxHeight={{ base: "auto", md: "75vh", lg: "90vh" }}
      p={{ base: 4, md: 0 }}
      mb={{ base: 8, md: 0, lg: "20px" }} // Adjust bottom margin for smaller screens
      mt={{
        base: 8,
        md: 0,
        lg: "20px", // Set a maximum margin value for larger screens
      }}
      {...profileSectionStyles}
    >
      {/* Left Column */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex={{ base: "none", md: 2 }}
        mb={{ base: 4, md: 0 }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            boxShadow: "lg",
            overflow: "hidden",
            position: "relative",
            transform: isHovered ? "translateY(-5px)" : "none", // Apply the same transform effect
            transition: "transform 0.3s ease", // Apply the same transition duration and easing
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="profile-image"
        >
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
              src="/assets/main.jpg"
              alt="Matt's Profile"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </div>
        <Box
          mt={4}
          display="flex"
          alignItems="center"
          fontWeight="bold"
          fontSize="md"
          bgGradient={
            colorMode === "light"
              ? "linear(to-r, #6B46C1, #205AD5)"
              : "linear(to-r, #A78BFA, #9F7AEA)" // Adjust the color values as needed
          }
          bgClip="text"
        >
          {" "}
          {/* Container for icon and text */}
          <TiLocation
            style={{
              color: "#6B46C1",
            }}
          />{" "}
          {/* Location icon */}
          <Box ml={1}>
            {" "}
            {/* Text for location */}
            Canada
          </Box>
        </Box>
        <HStack mt={2} spacing={2}>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            fontSize="xl"
            size="sm"
            as={Link}
            href="https://www.instagram.com/mattespoz/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            fontSize="xl"
            size="sm"
            as={Link}
            href="https://www.twitter.com/mattespoz"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="xl"
            size="sm"
            as={Link}
            href="https://www.linkedin.com/in/mattespoz/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
        </HStack>
      </Flex>

      <Box
        flex={{ base: 1, md: 8 }}
        ml={{ base: 0, md: "lg" }}
        mt={{
          base: "lg",
          md: "16px",
          lg: "16px", // Set a maximum margin value for larger screens
        }}
        mb={{
          base: "16px",
          md: "24px",
          lg: "48px", // Set a maximum margin value for larger screens
        }}
      >
        <Heading as="h1" size="xl" mb={4}>
          <span className="wave" role="img" aria-label="Waving Hand">
            👋
          </span>{" "}
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
            Hey, I&apos;m Matt.
          </Box>
        </Heading>
        <Text fontSize="sm" color="gray.500" mt="5px" mb="2px">
          Welcome to my corner of the internet...
        </Text>
        <Text fontSize="xl">
          I’m an engineer building a portfolio of next-gen{" "}
          <Box as="span" fontWeight="bold">
            software companies used <u>by millions.</u>
          </Box>
        </Text>

        <Text
          mt={4}
          mb={4}
          fontSize="md"
          color={colorMode === "light" ? "#6B46C1" : "#A78BFA"} // Adjust the color values as needed
        >
          <Box as="span" fontWeight="bold">
            TL;DR:
          </Box>{" "}
          I&apos;m a 22 y/o whose first startup was acquired by a $50m company.
          Now, I&apos;m building{" "}
          <Link
            href="https://twitter.com/halationco/"
            isExternal
            textDecoration="underline"
          >
            Halation
          </Link>
          , a holdCo for building & buying internet companies. I also write life
          updates 👇
        </Text>

        <iframe
          src="https://embeds.beehiiv.com/8585a83a-f9e1-4766-80c9-a88f625f65ee?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          width="100%"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: "7px !important",
            backgroundColor: "transparent",
          }}
        ></iframe>

        <Text fontSize="xs" color="gray.500" mt={4}>
          Press:{" "}
          <Link
            href="https://web.archive.org/web/20230610081204/https://forbesbaltics.com/lv/viedokli/raksts/kerot-web-3-tendencu-vilni"
            isExternal
            textDecoration="underline"
          >
            Forbes
          </Link>{" "}
          <Link
            href="https://www.forbes.com/sites/annefield/2023/05/29/teaching-entrepreneurship-and-vc-skills-to--students-of-color-and-women/"
            isExternal
            textDecoration="underline"
          >
            (2),
          </Link>{" "}
          <Link
            href="https://finance.yahoo.com/finance/news/talent-protocol-supports-next-generation-130000334.html"
            isExternal
            textDecoration="underline"
          >
            Yahoo,
          </Link>{" "}
          <Link
            href="https://www.bloomberg.com/press-releases/2022-10-05/talent-protocol-supports-the-next-generation-of-builders-through-the-acquisition-of-agora-labs"
            isExternal
            textDecoration="underline"
          >
            Bloomberg,
          </Link>{" "}
          <Link
            href="https://top.mlh.io/2023/profiles/matt-espinoza"
            isExternal
            textDecoration="underline"
          >
            Major League Hacking,
          </Link>{" "}
          <Link
            href="https://cryptobriefing.com/talent-protocol-supports-the-next-generation-of-builders-through-the-acquisition-of-agora-labs/"
            isExternal
            textDecoration="underline"
          >
            Crypto Briefing,
          </Link>{" "}
          <Link
            href="https://podcasts.apple.com/fr/podcast/venture-talks-5-personal-tokens-creators-ipos-a/id1483644520?i=1000541717096"
            isExternal
            textDecoration="underline"
          >
            Venture Talks,
          </Link>{" "}
          <Link
            href="https://www.instagram.com/p/Cq8UA9DrI_w/"
            isExternal
            textDecoration="underline"
          >
            CUTC
          </Link>{" "}
        </Text>
      </Box>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
        }

        .wave {
          display: inline-block;
          animation-name: wave-animation;
          animation-duration: 1.5s;
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
