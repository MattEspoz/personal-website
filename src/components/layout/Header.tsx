// Header.tsx
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        >
          @mattespoz
        </Link>
      </Flex>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        {/* Your navigation links */}
        <Link href="https://www.twitter.com/mattespoz" mr={4}>
          🔨 Twitter
        </Link>
        <Link href="/projects" mr={4}>
          💌 Newsletter
        </Link>
      </Box>
      <Box ml={4}>
        {/* Toggle dark mode */}
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
        />
      </Box>
    </Flex>
  );
};

export default Header;
