import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import VideoComponent from "./VideoComponent";

export default function HeroSection() {
  const [lessThanSmall] = useMediaQuery("(min-width: 600px)");

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box backgroundColor="#FFF0B8">
      <Container maxW="8xl" padding="3rem 2rem">
        <SimpleGrid
          columns={{ base: 1, xl: 2, lg: 2, md: 1, sm: 1 }}
          gap={{ base: "2rem", xl: "5rem", lg: "5rem", md: "4rem" }}
        >
          <Box
            textAlign={{ base: "center", xl: "left", lg: "left", md: "center" }}
            w="100%"
          >
            <Heading
              margin="1rem 0"
              fontSize={{ base: "3rem", xl: "4rem", lg: "4rem", md: "3.5rem" }}
              as="h1"
            >
              Make the best use of your time
            </Heading>
            <Heading
              as="h3"
              margin="2rem 0"
              fontWeight="medium"
              fontSize="1.3rem"
            >
              TMetric is a smart choice for time tracking to see work in
              progress and keep team, cost and quality under control
            </Heading>

            <Box
              w={{
                base: "100%",
                xl: "70%",
                lg: "70%",
                md: "80%",
                sm: "100%",
              }}
              margin={{
                base: "auto",
                xl: "0",
                lg: "0",
                md: "auto",
                sm: "auto",
              }}
            >
              <Flex>
                <Flex
                  border="1px solid rgba(0, 0, 0, 0.1)"
                  padding="0.25rem 0.75rem"
                  justifyContent="center"
                  alignItems="center"
                  borderRight="0"
                  borderTopLeftRadius="3px"
                  borderBottomLeftRadius="3px"
                  backgroundColor="white"
                >
                  <Icon fill="blue.500" w="1.2rem" h="1.2rem" as={GrMail} />
                </Flex>
                <Input
                  backgroundColor="white"
                  borderRadius="0"
                  placeholder="Enter your email address"
                />
              </Flex>
              <Flex
                margin="1rem 0"
                alignItems="center"
                flexDirection={{
                  base: "column",
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                }}
                gap="1.5rem"
              >
                <Button
                  padding="1.3rem 4rem"
                  borderRadius="5px"
                  colorScheme="blue"
                  width={{ base: "100%", xl: "auto", lg: "auto", md: "auto" }}
                >
                  Get Started
                </Button>
                <Text>Fully Functional 30-Day Trial</Text>
              </Flex>
            </Box>
          </Box>
          {lessThanSmall ? (
            <Box w="100%" position="relative">
              <Image
                w="100%"
                // position="relative"
                src="https://tmetric.com/media/w53hmkzd/img-video-cover.png"
              />
              <Box
                cursor="pointer"
                position="absolute"
                top="27%"
                left="42%"
                size="7rem"
                zIndex="9"
                as={BsFillPlayCircleFill}
                onClick={() => onToggle()}
              />
            </Box>
          ) : (
            <Button
              backgroundColor="transparent"
              color="blue"
              border="1px solid blue"
              _hover={{ backgroundColor: "transparent" }}
              borderRadius="1px"
              onClick={() => onToggle()}
            >
              Watch Video
            </Button>
          )}
        </SimpleGrid>
      </Container>
      {isOpen ? <VideoComponent props={{ isOpen, onToggle }} /> : ""}
    </Box>
  );
}
