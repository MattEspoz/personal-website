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
      <Flex align="center" justify="center">
        <Box as={FiAlertCircle} mr={1} />
        {text}{" "}
        <Box as="span" ml={1}>
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
