import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <>
      <Flex
        border="1px solid grey"
        borderRadius="4"
        flexDirection="column"
        width="30%"
        margin="auto"
      >
        <Box backgroundColor="#f2f5fc">
          <Center marginTop="14">
            <Img src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" />
          </Center>
          <Box>
            <Text
              fontSize="24px"
              fontWeight="500"
              marginTop="6"
              marginBottom="6"
            >
              Log into TMetric
            </Text>
          </Box>
        </Box>
        <Box padding="8">
          <FormControl>
            <FormLabel fontSize="14px" color="#857e88">
              Email
            </FormLabel>
            <Input
              placeholder="jhonsmith@mail.com"
              size="sm"
              marginBottom="4"
            />
            <FormLabel fontSize="14px" color="#857e88">
              Password
            </FormLabel>
            <Input placeholder="Enter your password" size="sm" />
            <Button
              bg="#3070f0"
              color="white"
              width="100%"
              size="sm"
              marginTop="6"
              _hover={{ bg: "#3070f0" }}
            >
              Log In
            </Button>
          </FormControl>
        </Box>
        <Flex direction="row" padding="8" marginTop="-14">
          <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
          <Box>or</Box>
          <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
        </Flex>

        <Box padding="8">
          <Flex
            border="1px solid red"
            marginBottom="3"
            padding="2"
          >
            <Img src="https://id.tmetric.com/images/google_logo.svg" />
            <Text fontSize="14px" color="#777e85" fontWeight="400">
              Log In with Google
            </Text>
          </Flex>
          <Flex border="1px solid red" marginBottom="3" padding="2">
            <Img src="https://id.tmetric.com/images/microsoft_logo.svg" />
            <Text fontSize="14px" color="#777e85" fontWeight="400">
              Log In with Microsoft
            </Text>
          </Flex>
          <Flex border="1px solid red" marginBottom="3" padding="2">
            <Img src="https://id.tmetric.com/images/apple_logo.svg" />
            <Text fontSize="14px" color="#777e85" fontWeight="400">
              Log In with Apple
            </Text>
          </Flex>
        </Box>
        <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
        <Flex justifyContent="space-between">
          <Text>Can't Log in?</Text>
          <Text>Sign Up</Text>
        </Flex>
      </Flex>
      <Text fontSize="14px">Privacy Policy</Text>
    </>
  );
};

export default Login;
