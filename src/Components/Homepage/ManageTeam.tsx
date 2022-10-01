import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function ManageTeam() {
  return (
    <Container maxW="8xl" padding="3rem 2rem">
      <Flex
        gap="2rem"
        flexDir={{ base: "column", xl: "row", lg: "row", md: "column" }}
      >
        <Box w="100%">
          <Heading
            textAlign={{ base: "center", xl: "left", lg: "left", md: "center" }}
            fontSize={{
              base: "2.5rem",
              xl: "3.2rem",
              lg: "3rem",
              md: "2.8rem",
            }}
            margin="1rem 0"
          >
            Manage your team effectively
          </Heading>
          <UnorderedList fontSize="1.3rem" padding="1rem 1.5rem">
            <ListItem>timekeeping</ListItem>
            <ListItem>sites and apps monitoring</ListItem>
            <ListItem>activity tracking</ListItem>
            <ListItem>screenshots capturing</ListItem>
            <ListItem>task management</ListItem>
            <ListItem>50+ integrations</ListItem>
            <ListItem>work schedule</ListItem>
          </UnorderedList>
          <Flex
            marginTop="2rem"
            justifyContent={{
              base: "center",
              xl: "flex-start",
              lg: "flex-start",
            }}
          >
            <NavLink to="/signup">
              <Button
                backgroundColor="#3070F0"
                _hover={{ backgroundColor: "#2258F5" }}
                color="white"
                padding="1.5rem 2rem"
                borderRadius="3px"
                margin={{ sm: "auto", md: "auto" }}
              >
                Start Free Trial
              </Button>
            </NavLink>
          </Flex>
        </Box>
        <Box w="100%">
          <Image
            w="100%"
            src="https://tmetric.com/media/upkh02nn/img-activity-cases.svg"
          />
        </Box>
      </Flex>
    </Container>
  );
}
