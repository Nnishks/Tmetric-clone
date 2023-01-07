import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Img,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { generateOtpAction } from "../ReduxComponents/User/user.action";
import { GET_OTP_SUCCESS } from "../ReduxComponents/User/user.types";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const { otpToken} = useSelector(
    (store) => store.auth
  );
  
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({
      ...otp,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    let bag = "";
    for (let keys in otp) {
      bag += otp[keys];
    }
    console.log(+bag);
    dispatch(generateOtpAction(bag, otpToken))
      .then((res) => {
        console.log("amt", res);
        if (res.type == GET_OTP_SUCCESS ) {
          toast({
            title: `${res.payload}`,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          navigate("/resetpassword");
        } else {
          toast({
            title: `${res.payload}`,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log("amit", err));
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
            check your email!
          </Text>
        </Box>
      </Box>
      <Box padding="8">
        <FormControl>
          <FormLabel fontSize="14px" color="#857e88">
            please enter the otp which has been sent to your email
          </FormLabel>
          <HStack>
            <PinInput otp>
              <PinInputField
                name="first"
                onChange={handleChange}
                value={otp.first}
              />
              <PinInputField
                name="second"
                onChange={handleChange}
                value={otp.second}
              />
              <PinInputField
                name="third"
                onChange={handleChange}
                value={otp.third}
              />
              <PinInputField
                name="fourth"
                onChange={handleChange}
                value={otp.fourth}
              />
            </PinInput>
          </HStack>
          <Button
            bg="#3070f0"
            color="white"
            width="30%"
            m="auto"
            size="sm"
            marginTop="6"
            _hover={{ bg: "#3070f0" }}
            type={"submit"}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Otp;
