import { Flex, Box } from "@chakra-ui/react";

export default function LoginSignupButtons() {
  return (
    <Flex alignItems="center" gap="1rem">
      <a href="#">
        <Box
          transition="0.15s all ease-in"
          _hover={{
            color: "#3070F1",
          }}
          fontWeight="medium"
        >
          Log In
        </Box>
      </a>
      <a href="#">
        <Box
          sx={{
            border: "1px solid #3070F1",
            padding: "6px 15px",
            fontWeight: "medium",
            color: "#3070F1",
            borderRadius: "5px",
            transition: "0.15s all ease-in",
            _hover: {
              backgroundColor: "#3070F1",
              color: "white",
            },
          }}
        >
          Sign Up
        </Box>
      </a>
    </Flex>
  );
}
