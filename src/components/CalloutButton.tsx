import {
  Box,
  Flex,
  Link,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

interface CalloutButtonProps {
  link: string;
  text: string;
}

const CalloutButton: React.FC<CalloutButtonProps> = ({ link, text }) => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const buttonBgColor = colorMode === "light" ? "#6B46C1" : "#A78BFA";
  const textColor = colorMode === "light" ? "white" : "purple.800"; // Change to dark green color

  return (
    <Box
      bg={buttonBgColor}
      color={textColor}
      py={3}
      textAlign="center"
      fontSize={{ base: "sm", md: "md" }}
      fontWeight="bold"
      borderRadius="10px"
      mt={4} // Adjust margin-top as needed
    >
      {isMobile ? (
        <Stack spacing={1} align="center" justify="center">
          <Flex align="center">
            <Box as={FiAlertCircle} size="1.5em" mr={1} />
            <Box as="span">{text}</Box>
          </Flex>
          <Link
            color={textColor}
            textDecoration="underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more 🔍
          </Link>
        </Stack>
      ) : (
        <Flex align="center" justify="center">
          <Box as={FiAlertCircle} mr={1} />
          {text}{" "}
          <Box as="span" ml={1}>
            <Link
              color={textColor}
              textDecoration="underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more 🔍
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default CalloutButton;
