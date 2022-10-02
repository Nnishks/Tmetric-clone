import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../ReduxComponents/User/user.action";

const Login = () => {
  const [user, setUser] = useState([]);
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (token) {
    navigate("/Time");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginAction(user));
  };

  return (
    <>
      <Flex
        border="1px solid grey"
        borderRadius="8"
        flexDirection="column"
        width="28%"
        margin="1.5rem auto"
      >
        <Box backgroundColor="#f2f5fc" borderRadius="8">
          <Center marginTop="14">
            <Img src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" />
          </Center>
          <Box textAlign="center">
            <Text fontSize="24px" fontWeight="500" margin="1rem auto">
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
              name="email"
              type="email"
              onChange={handleChange}
            />
            <FormLabel fontSize="14px" color="#857e88">
              Password
            </FormLabel>
            <Input
              placeholder="Enter your password"
              size="sm"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <Button
              bg="#3070f0"
              color="white"
              width="100%"
              size="sm"
              marginTop="6"
              _hover={{ bg: "#3070f0" }}
              type={"submit"}
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </FormControl>
        </Box>
        <Flex direction="row" padding="8" marginTop="-12">
          <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
          <Box>
            <Text color="3070f0" fontWeight="400">
              or
            </Text>
          </Box>
          <Divider bgColor="3070f0" height="5px" width="100%" margin="2" />
        </Flex>

        <Box padding="8" marginTop="-12">
          <Flex
            border="1px solid grey"
            borderRadius="4"
            marginBottom="3"
            padding="2"
            justifyContent="center"
            gap="4"
          >
            <Img src="https://id.tmetric.com/images/google_logo.svg" />
            <Text fontSize="14px" color="#777e85" fontWeight="600">
              Log In with Google
            </Text>
          </Flex>
          <Flex
            border="1px solid grey"
            borderRadius="4"
            marginBottom="3"
            padding="2"
            justifyContent="center"
            gap="4"
          >
            <Img src="https://id.tmetric.com/images/microsoft_logo.svg" />
            <Text fontSize="14px" color="#777e85" fontWeight="600">
              Log In with Microsoft
            </Text>
          </Flex>
          <Flex
            border="1px solid grey"
            borderRadius="4"
            marginBottom="3"
            padding="2"
            justifyContent="center"
            gap="4"
          >
            <Img src="https://id.tmetric.com/images/apple_logo.svg" />
            <Text fontSize="14px" color="#777e85" fontWeight="600">
              Log In with Apple
            </Text>
          </Flex>
        </Box>
        <Divider
          bgColor="3070f0"
          height="5px"
          width="85%"
          margin="auto"
          position="relative"
          top="-6"
        />
        <Flex
          justifyContent="space-between"
          width="85%"
          margin="auto"
          padding="2"
          color="#3070f0"
        >
          <Text fontSize="14px" fontWeight="600">
            Can't Log in?
          </Text>
          <Link to="/signup">
            <Text fontSize="14px" fontWeight="600">
              Sign Up
            </Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
