// styles/theme.ts
import { ChakraTheme, extendTheme } from "@chakra-ui/react";

// Define your custom theme as you did before
const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    primary: {
      100: "#F7FAFC",
      // Add other shades of primary color here
    },
    // Add other color modes and colors here
  },
  styles: {
    global: {
      body: {
        bg: "primary.100",
        color: "gray.800",
      },
    },
  },
  blur: {
    // Define your blur styles here
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "32px",
    "2xl": "64px",
  },
});

export default theme as ChakraTheme; // Export your custom theme with the correct type
