import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiMail, FiMenu, FiMoon, FiSun, FiTwitter } from "react-icons/fi";
import UpdateBanner from "./UpdateBanner";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSticky, setIsSticky] = useState(false);

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

  // Set initial background image based on initial colorMode
  useEffect(() => {
    if (colorMode === "light") {
      document.body.style.backgroundImage =
        "url('/assets/background-dark.png')";
    } else {
      document.body.style.backgroundImage =
        "url('/assets/background-light.png')";
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyles = {
    bg: colorMode === "light" ? "transparent" : "#020301",
    color: colorMode === "light" ? "black" : "white",
    _hover: {
      bg: colorMode === "light" ? "white" : "#020301",
    },
  };

  return (
    <Box
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      position={isSticky ? "sticky" : "static"}
      top={0}
      zIndex={isSticky ? "sticky" : "auto"}
      {...headerStyles}
    >
      <UpdateBanner />
      <Flex
        as="header"
        align="center"
        p={4}
        bg={isSticky ? headerStyles._hover.bg : headerStyles.bg} // Adjust the background color here
        boxShadow={isSticky ? "md" : "none"}
      >
        <Flex direction="row" alignItems="center">
          {/* Your logo or brand */}
          <Heading fontSize="xl" fontWeight="bold">
            Matt Espinoza ✦
          </Heading>
          <Link
            href="https://www.twitter.com/mattespoz"
            fontSize="sm"
            fontWeight="bold"
            ml={2}
            color="gray.500"
            _hover={{
              color: "teal.500",
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
              _hover={{ color: "teal.500", transform: "translateY(-2px)" }}
              display="flex"
              alignItems="center"
              target="_blank"
            >
              <FiTwitter style={{ marginRight: "6px" }} /> Twitter
            </Link>
            <Link
              href="https://compound.beehiiv.com/"
              fontWeight="bold"
              _hover={{ color: "teal.500", transform: "translateY(-2px)" }}
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
            onClick={handleToggleColorMode} // Use the custom handler
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
