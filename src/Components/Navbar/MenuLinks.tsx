import {
  Flex,
  Box,
  Text,
  Icon,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import SubmenuItem from "./SubmenuItem";
import menuItems from "./menuItems.json";

export default function MenuLinks() {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();

  return (
    <Flex
      justifyContent="space-between"
      fontWeight="medium"
      alignItems="center"
      gap="3rem"
    >
      <Flex
        cursor="pointer"
        onClick={() => {
          onToggle();
          if (isOpen2 === true) onToggle2();
        }}
        alignItems="center"
        gap="5px"
      >
        <Text>Why TMetric</Text>
        <Icon w="10px" mt="3px" as={BsChevronDown} />
      </Flex>

      {/* Dropdown menu for why metric */}

      <Box
        zIndex="999"
        position="absolute"
        top="4rem"
        left="0"
        w="100%"
        backgroundColor="white"
        paddingBottom="2rem"
        borderTop="1px solid lightgray"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 6px 5px 0px"
        display={isOpen ? "block" : "none"}
      >
        <Flex padding="2rem 5rem 3rem 12rem" gap="15rem">
          <Box maxW="13rem">
            <Text
              fontWeight="medium"
              fontSize="1.3rem"
              color="#A4B4CB"
              mb="1rem"
            >
              Overview
            </Text>
            <a href="#">
              <Box onClick={onToggle}>
                <Text mb="0.5rem">Industry</Text>
                <Text
                  color="#4C5157"
                  fontWeight="medium"
                  fontFamily="sans-serif"
                  mb="1rem"
                >
                  Made for all industries. Check benefits of usage
                </Text>
              </Box>
            </a>
            <a href="#">
              <Box onClick={onToggle}>
                <Text mb="0.5rem">Customers</Text>
                <Text
                  color="#4C5157"
                  fontWeight="medium"
                  fontFamily="sans-serif"
                  mb="1rem"
                >
                  See why business use TMetric for time tracking and workflow
                  management
                </Text>
              </Box>
            </a>
          </Box>

          <Box>
            <Text
              fontWeight="medium"
              fontSize="1.3rem"
              color="#A4B4CB"
              mb="0.5rem"
            >
              Features
            </Text>
            <SimpleGrid columns={3} gap="1rem">
              {menuItems.tmetric.map((item) => (
                <SubmenuItem key={item.id} {...item} toggler={onToggle} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>

      <Flex
        cursor="pointer"
        onClick={() => {
          onToggle2();
          if (isOpen === true) onToggle();
        }}
        alignItems="center"
        gap="2px"
      >
        <Text>Apps & Integrations</Text>
        <Icon w="10px" mt="3px" as={BsChevronDown} />
      </Flex>

      {/* Second Drop down menu */}
      <Box
        zIndex="999"
        position="absolute"
        top="4rem"
        left="0"
        w="100%"
        backgroundColor="white"
        paddingBottom="2rem"
        borderTop="1px solid lightgray"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 6px 5px 0px"
        display={isOpen2 ? "block" : "none"}
      >
        <Flex padding="2rem 5rem 3rem 12rem" gap="15rem">
          <Box maxW="13rem">
            <Text
              fontWeight="medium"
              fontSize="1.3rem"
              color="#A4B4CB"
              mb="1rem"
            >
              Apps
            </Text>
            <a href="#">
              <Box onClick={onToggle2}>
                <Text mb="0.5rem">Browser Extensions</Text>
                <Text
                  color="#4C5157"
                  fontWeight="medium"
                  fontFamily="sans-serif"
                  mb="1rem"
                >
                  Simple time tracking extension which helps you be more
                  productive
                </Text>
              </Box>
            </a>
            <a href="#">
              <Box onClick={onToggle2}>
                <Text mb="0.5rem">Mobile apps</Text>
                <Text
                  color="#4C5157"
                  fontWeight="medium"
                  fontFamily="sans-serif"
                  mb="1rem"
                >
                  Install TMetric app to your phone or a tablet device. Android
                  and iOS platforms are supported.
                </Text>
              </Box>
            </a>
            <a href="#">
              <Box onClick={onToggle2}>
                <Text mb="0.5rem">Desktop apps</Text>
                <Text
                  color="#4C5157"
                  fontWeight="medium"
                  fontFamily="sans-serif"
                  mb="1rem"
                >
                  Download TMetric app for your desktop computer or a laptop
                </Text>
              </Box>
            </a>
          </Box>

          <Box>
            <Text
              fontWeight="medium"
              fontSize="1.3rem"
              color="#A4B4CB"
              mb="0.5rem"
            >
              Integrations
            </Text>
            <SimpleGrid columns={3} gap="1rem">
              {menuItems.appIntegration.map((item) => (
                <SubmenuItem key={item.id} {...item} toggler={onToggle2} />
              ))}
            </SimpleGrid>
            <Flex
              alignItems="center"
              gap="0.5rem"
              color="blue"
              mt="2rem"
              ml="3rem"
            >
              <a href="#">View All Integrations</a>
              <Icon as={AiOutlineArrowRight} />
            </Flex>
          </Box>
        </Flex>
      </Box>

      <a href="#">
        <Text>Pricing</Text>
      </a>
      <a href="#">
        <Text>Support</Text>
      </a>
      <a href="#">
        <Text>Blog</Text>
      </a>
    </Flex>
  );
}
