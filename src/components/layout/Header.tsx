import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FiMail, FiMenu, FiMoon, FiSun, FiTwitter } from "react-icons/fi";

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

  return (
    <Flex as="header" align="center" p={4}>
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
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={handleToggleColorMode} // Use the custom handler
        />
      </Box>
    </Flex>
  );
};

export default Header;
