/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Login() {
  const color = useColorModeValue("gray.800", "gray.400");
  const buttonColor = useColorModeValue("gray.100", "gray.700");


  return (
    <Box
      w={["full", "lg"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
      color={color}
    >
      <VStack spacing={5} mt="2em" mb="4em" align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Sign in to your account</Heading>
          <Text>to enjoy all of our cool features</Text>
        </VStack>
        <FormControl>
          <FormLabel>E-Mail Address</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            placeholder="email@testemail.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            type="password"
            placeholder="Enter your password"
          />
        </FormControl>
        <HStack p="15px" w="full" justify="center">
          <Checkbox>Remember me.</Checkbox>
          <Button variant="link" colorScheme="blue">Forgot Password?</Button>
        </HStack>
        <Button
          rounded="md"
          colorScheme="blue"
          color={buttonColor}
          w="full"
        >
          Sign in
        </Button>
        <HStack w="full" justify="center">
          <Text>Don't have an account?</Text>
          <Button variant="link" colorScheme="blue">Sign Up</Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Login;
