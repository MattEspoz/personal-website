// styles/theme.ts
import { ChakraTheme, extendTheme } from "@chakra-ui/react";

// Define your custom theme as you did before
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set the initial color mode to "light"
    useSystemColorMode: false,
  },

  fonts: {
    body: "Poppins, Inter, sans-serif", // Change "Inter" to "Poppins"
    heading: "Poppins, Inter, sans-serif", // Change "Inter" to "Poppins"
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

  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
});

export default theme as ChakraTheme; // Export your custom theme with the correct type
