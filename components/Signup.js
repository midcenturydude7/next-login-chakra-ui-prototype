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

function Signup() {
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
      <VStack spacing={5} mt="1.5em" mb="4em" align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading mb="5px">Create your account</Heading>
          <Text>Please sign up to continue</Text>
        </VStack>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            placeholder="Enter your username"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            placeholder="Enter your email address"
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
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            type="password"
            placeholder="Re-enter your password"
          />
        </FormControl>
        <HStack p="15px" w="full" justify="left
        ">
          <Checkbox>Remember me</Checkbox>
        </HStack>
        <Button
          rounded="md"
          colorScheme="blue"
          color={buttonColor}
          w="full"
        >
          Sign up
        </Button>
        <HStack w="full" justify="center">
          <Text>Already have an account?</Text>
          <Button
            variant="link"
            colorScheme="blue"
          >
            <a href="/">Sign in</a>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Signup;
