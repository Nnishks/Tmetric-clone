import {
  Box,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import BrandLogo from "../Navbar/BrandLogo";
import { GoDeviceDesktop } from "react-icons/go";
import { AiFillAndroid, AiFillApple, AiFillChrome } from "react-icons/ai";
import { FaEdge, FaFirefoxBrowser, FaSafari } from "react-icons/fa";
import { ImOpera } from "react-icons/im";
import FooterMobileMenu from "./FooterMobileMenu";

export default function TopFooter() {
  const [mobileScreen] = useMediaQuery("(max-width: 600px)");

  return (
    <Box padding="3rem 0">
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent="space-between"
        gap={{ base: "3rem", xl: "1rem" }}
      >
        <Box>
          <BrandLogo />
        </Box>

        {mobileScreen ? (
          <FooterMobileMenu />
        ) : (
          <SimpleGrid
            w={{ base: "100%", xl: "75%" }}
            columns={{ base: 2, xl: 4, lg: 4 }}
            gap="2rem"
          >
            <Box>
              <Text mb="1rem" fontSize="1.2rem" fontWeight="medium">
                Applications
              </Text>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <GoDeviceDesktop fill="gray" />
                  <Text>Desktop</Text>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <AiFillApple fill="gray" />
                  <Text>iOS</Text>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <AiFillAndroid fill="gray" />
                  <Text>Android</Text>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Text mb="1rem" fontSize="1.2rem" fontWeight="medium">
                Browsers Extensions
              </Text>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <AiFillChrome fill="gray" />
                  <Text>Chrome</Text>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <FaFirefoxBrowser fill="gray" />
                  <Text>Firefox</Text>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <ImOpera fill="gray" />
                  <Text>Opera</Text>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <FaEdge fill="gray" />
                  <Text>Edge</Text>
                </Flex>
              </Link>
              <Link href="#">
                <Flex
                  fontSize="1.1rem"
                  mb="10px"
                  alignItems="center"
                  gap="10px"
                >
                  <FaSafari fill="gray" />
                  <Text>Safari</Text>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Text mb="1rem" fontSize="1.2rem" fontWeight="medium">
                Resources
              </Text>
              <Link href="#">
                <Text fontSize="1.1rem">Solutions</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Integrations</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Help</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Time Trackers Comparison</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Blog</Text>
              </Link>
            </Box>
            <Box>
              <Text mb="1rem" fontSize="1.2rem" fontWeight="medium">
                About
              </Text>
              <Link href="#">
                <Text fontSize="1.1rem">About TMetric</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Terms of Services</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Privacy Policy</Text>
              </Link>
              <Link href="#">
                <Text fontSize="1.1rem">Cookies Policy</Text>
              </Link>
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Box>
  );
}
