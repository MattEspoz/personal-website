import theme from "@/styles/theme";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { FiMail, FiMoon, FiSun, FiTwitter } from "react-icons/fi";
import UpdateBanner from "./UpdateBanner";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    if (colorMode === "light") {
      document.body.style.backgroundImage =
        "url('/assets/background-dark.png')";
    } else {
      document.body.style.backgroundImage =
        "url('/assets/background-light.png')";
    }
    toggleColorMode();
  };

  // // Set initial background image based on initial colorMode
  // useEffect(() => {
  //   if (colorMode === "light") {
  //     document.body.style.backgroundImage =
  //       "url('/assets/background-light.png')";
  //   } else {
  //     document.body.style.backgroundImage =
  //       "url('/assets/background-dark.png')";
  //   }
  // }, []);

  const headerBg =
    colorMode === "light"
      ? "rgba(255, 255, 255, 0.8)" // Semi-transparent white
      : "rgba(9, 14, 17, 0.8)"; // Semi-transparent dark

  const headerStyles = {
    bg: headerBg,
    color: colorMode === "light" ? "black" : "white",
    borderRadius: "10px",
    _hover: {
      bg: colorMode === "light" ? "white" : "#020301",
    },
  };

  return (
    <Box
      mt={10}
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      position="sticky"
      top={0}
      zIndex="sticky"
      {...headerStyles}
    >
      <Flex
        as="header"
        align="center"
        p={4}
        bg={headerStyles.bg}
        boxShadow="md"
        borderRadius="10px"
      >
        <Flex direction="row" alignItems="center">
          {/* Your logo or brand */}
          <Link
            as="a"
            href="/"
            fontSize={{ base: "lg", md: "xl" }} // Define font sizes for different screen sizes
            fontWeight="bold"
            _hover={{
              textDecoration: "none",
            }}
          >
            Matt Espinoza ✦
          </Link>
          <Link
            href="https://www.twitter.com/mattespoz"
            fontSize="sm"
            fontWeight="bold"
            ml={2}
            color="gray.500"
            _hover={{
              color: "#9F7AEA",
              textDecoration: "underline",
              transform: "translateY(-2px)",
            }}
            display="flex"
            alignItems="center"
          >
            @mattespoz
          </Link>
        </Flex>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          {/* Your navigation links */}
          <Flex alignItems="center">
            <Link
              href="https://www.twitter.com/mattespoz"
              mr={2}
              fontWeight="bold"
              _hover={{ color: "#9F7AEA", transform: "translateY(-2px)" }}
              display="flex"
              alignItems="center"
              target="_blank"
            >
              <FiTwitter style={{ marginRight: "6px" }} /> Twitter
            </Link>
            <Link
              href="https://compound.beehiiv.com/"
              fontWeight="bold"
              _hover={{ color: "#9F7AEA", transform: "translateY(-2px)" }}
              display="flex"
              alignItems="center"
              target="_blank"
            >
              <FiMail style={{ marginRight: "6px" }} /> Newsletter
            </Link>
          </Flex>
        </Box>
        <Box ml={4}>
          {/* Toggle dark mode */}
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={
              colorMode === "light" ? (
                <FiMoon color="#6B46C1" fill="#6B46C1" />
              ) : (
                <FiSun color="#6B46C1" fill="#6B46C1" />
              )
            }
            onClick={handleToggleColorMode}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
