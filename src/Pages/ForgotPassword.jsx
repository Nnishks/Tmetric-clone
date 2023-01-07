import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { forgetPasswordAction } from "../ReduxComponents/User/user.action";
import { useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD_SUCCESSFULL } from "../ReduxComponents/User/user.types";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgetPasswordAction(email)).then((res) => {
      console.log(res);
      if (res.type == FORGOT_PASSWORD_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "redirecting to otp page",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/otp");
      } else {
        toast({
          title: `${res.payload}`,
          description: "please provide correct details",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
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
              Enter email to get otp
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Genrate Otp
            </Button>
          </FormControl>
        </Box>

        <Divider
          bgColor="3070f0"
          height="5px"
          width="85%"
          margin="auto"
          position="relative"
          top="-6"
        />
      </Flex>
    </>
  );
};

export default ForgotPassword;
