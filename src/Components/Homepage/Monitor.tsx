import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Monitor() {
  return (
    <Container maxW="8xl" padding="3rem 1rem">
      <SimpleGrid
        columns={{ base: 1, xl: 2, lg: 2 }}
        flexDir={{ base: "column", xl: "row", lg: "row", md: "column" }}
        gap="2rem"
      >
        <Box>
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
            Ensure the profitability of your business
          </Heading>
          <UnorderedList fontSize="1.3rem" padding="1rem 1.5rem">
            <ListItem>project management</ListItem>
            <ListItem>project budgeting</ListItem>
            <ListItem>billing and invoicing</ListItem>
            <ListItem>accurate payroll</ListItem>
            <ListItem>detailed reports</ListItem>
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
        <Box>
          <Image
            sizes="100%"
            src="https://tmetric.com/media/0sapzfi1/time-off-calendar-case.png"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
