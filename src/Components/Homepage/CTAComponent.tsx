import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function CTAComponent() {
  return (
    <Box
      color="white"
      backgroundColor="#27158c"
      textAlign="center"
      padding="3rem"
    >
      <Heading fontSize="3rem">Make time work for you!</Heading>
      <NavLink to="/signup">
        <Button
          margin="2rem"
          backgroundColor="white"
          color="black"
          padding="1.5rem 2rem"
          fontSize="1.1rem"
        >
          Start Free Trial
        </Button>
      </NavLink>
      <Flex justifyContent="center" wrap="wrap">
        Powered by
        <Image src="https://tmetric.com/media/pvgfkry5/logo-devart-small-white.svg" />{" "}
        A software vendor with 20 years of experience.
      </Flex>
    </Box>
  );
}
