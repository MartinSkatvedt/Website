import type { AppProps } from "next/app";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const theme = extendTheme({
  orange: {
    50: "#fff3da",
    100: "#ffddae",
    200: "#ffc77d",
    300: "#ffb14b",
    400: "#ff9b1a",
    500: "#e68100",
    600: "#b36500",
    700: "#814800",
    800: "#4f2a00",
    900: "#1f0c00",
  },
  fonts: {
    body: "ubuntu-mono",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100" w="100%">
        <Box minHeight="100vh">
          <NavBar />
          <Component {...pageProps} />
        </Box>

        <Footer />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;
