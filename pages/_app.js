/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React from "react";
import {ChakraProvider} from "@chakra-ui/provider";
import {extendTheme} from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({colors});

function App({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
