import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import BrandLogo from "../Navbar/BrandLogo";

export default function TopFooter() {
  return (
    <Box>
      <Flex>
        <Box>
          <BrandLogo />
        </Box>
        <SimpleGrid columns={4}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
