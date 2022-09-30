import { Box } from "@chakra-ui/react";
import CopyrightSection from "./CopyrightSection";
import TopFooter from "./TopFooter";

export default function Footer() {
  return (
    <Box backgroundColor="#EBEDF0">
      <Box width="90%" marginInline="auto">
        <TopFooter />
        <CopyrightSection />
      </Box>
    </Box>
  );
}
