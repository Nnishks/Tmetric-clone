import { Box, Container } from "@chakra-ui/react";
import Footer from "../Components/Footer/Footer";
import Awards from "../Components/Homepage/Awards";
import CTAComponent from "../Components/Homepage/CTAComponent";
import HeroSection from "../Components/Homepage/HeroSection";
import Integration from "../Components/Homepage/Integration";
import ManageTeam from "../Components/Homepage/ManageTeam";
import Monitor from "../Components/Homepage/Monitor";
import Profiltability from "../Components/Homepage/Profitability";
import Reviews from "../Components/Homepage/Reviews";
import WhyChoose from "../Components/Homepage/WhyChoose";
import WhyTrackTabs from "../Components/Homepage/WhyTrackTabs";
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
      <Box backgroundColor="#F6F7F8">
        <ManageTeam />
      </Box>
      <Profiltability />
      <Box backgroundColor="#F6F7F8">
        <Monitor />
      </Box>
      <Integration />
      <WhyTrackTabs />
      <Reviews />
      <WhyChoose />
      <Box>
        <CTAComponent />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
