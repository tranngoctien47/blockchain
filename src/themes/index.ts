import {
  ChakraProvider,
  ThemeConfig,
  extendTheme,
  ComponentStyleConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: "#D6517D",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      boxShadow: "0px 2px 2px 1px #0F0F0F",
      fontFamily: "VT323",
      padding: "15px",
      width: "100px",
      border: "1px solid gray",
    },
    outline: {
      borderRadius: "5px",
      color: "#D6517D",
      fontWeight: "bold",
      padding: "12px 36px",
      border: "1px solid #D6517D !important",
    },
  },
};

const components = {
  Button,
};

const theme = extendTheme({
  config,
  components,
  breakpoints,
});

export default theme;
