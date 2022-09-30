import { Box, Container } from "@chakra-ui/react";
import Awards from "../Components/Homepage/Awards";
import CTAComponent from "../Components/Homepage/CTAComponent";
import HeroSection from "../Components/Homepage/HeroSection";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Box
        margin="2rem 0"
        paddingBottom="2rem"
        borderBottom="1px solid lightgray"
      >
        <Container maxW="8xl">
          <Awards />
        </Container>
      </Box>
      <Box>
        <CTAComponent />
      </Box>
    </>
  );
};

export default HomePage;
