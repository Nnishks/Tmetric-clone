import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../ReduxComponents/User/user.action";
import { RESET_PASSWORD_SUCCESS } from "../ReduxComponents/User/user.types";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { otpToken } = useSelector((store) => store.auth);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(password);
    dispatch(resetPasswordAction(password, otpToken)).then((res) => {
      console.log("amit", res);
      if (res.type == RESET_PASSWORD_SUCCESS) {
        toast({
          title: `${res.payload}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/login");
        localStorage.removeItem("otpToken")
      } else {
        toast({
          title: `${res.payload}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };

  return (
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
            Reset your Password!
          </Text>
        </Box>
      </Box>
      <Box padding="8">
        <FormControl>
          <FormLabel fontSize="14px" color="#857e88">
            new password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
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
            Submit
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ResetPassword;
