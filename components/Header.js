/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Header() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  const bgColor = useColorModeValue("gray.300", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.400");

  return (
    <>
      <VStack
        boxShadow="0 10px 17px rgba(119, 119, 119, 0.4)"
        borderBottom="1px solid rgba(153, 153, 153, 0.5)"
      >
        <Flex
          w="100%"
          bgColor={bgColor}
          p="1em"
        >
          <Heading
            ml="8"
            mt="2"
            size="md"
            fontWeight="semibold"
            color={textColor}
          >
            Simple Login Application:
            <Text fontSize="0.77em">Built with Next.js, React, Chakra UI</Text>
          </Heading>
          <Spacer/>
          <IconButton
            ml={2}
            icon={<FaLinkedin />}
            isRound="true"
          />
          <IconButton ml={2} icon={<FaGithub />} isRound="true" />
          <IconButton ml={2} icon={<FaGitlab />} isRound="true" />
          {/* Toggle color mode between light and dark */}
          <IconButton
            ml="10"
            mr="10"
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          />
        </Flex>
      </VStack>
    </>
  );
}

export default Header;
