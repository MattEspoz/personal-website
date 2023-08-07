// Header.tsx
import {
  Box,
  Flex,
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
      <Box>
        {/* Your logo or brand */}
        <Link href="/" fontSize="xl" fontWeight="bold">
          Matt Espinoza
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        {/* Your navigation links */}
        <Link href="/about" mr={4}>
          About
        </Link>
        <Link href="/projects" mr={4}>
          Projects
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
