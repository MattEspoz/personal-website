import { Box, Flex, Link } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

interface CalloutButtonProps {
  link: string;
  text: string;
}

const CalloutButton: React.FC<CalloutButtonProps> = ({ link, text }) => {
  return (
    <Box
      bg="teal.500"
      color="white"
      py={3}
      textAlign="center"
      fontSize={{ base: "sm", md: "md" }}
      fontWeight="bold"
      borderRadius="10px"
      mt={4} // Adjust margin-top as needed
    >
      <Flex direction="column" align="center">
        <Flex align="center">
          <Box as={FiAlertCircle} size="1.5em" mr={1} />
          <Box as="span">{text}</Box>
        </Flex>
        <Box mt={2}>
          <Link
            color="white"
            textDecoration="underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more 🔍
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default CalloutButton;
