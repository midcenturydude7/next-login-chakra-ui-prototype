/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React from "react";
import {ChakraProvider} from "@chakra-ui/provider";
import theme from "../src/theme/theme";


function App({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
