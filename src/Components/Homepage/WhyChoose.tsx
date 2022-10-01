import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const data = [
  {
    id: 1,
    img_url: "https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg",
    desc: "The most straightforward time tracking app",
  },
  {
    id: 2,
    img_url: "https://tmetric.com/media/opdfdo3l/icon-platforms.svg",
    desc: "Available on all platforms: macOS, Windows, Linux, iOS, and Android",
  },
  {
    id: 3,
    img_url: "https://tmetric.com/media/igkmpmix/icon-freetrial.svg",
    desc: "Free plan with basic time tracking for a team up to 5",
  },
  {
    id: 4,
    img_url: "https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg",
    desc: "Reasonable price makes it affordable for anyone",
  },
  {
    id: 5,
    img_url: "https://tmetric.com/media/0uyowzzu/icon-multilang.svg",
    desc: "Multilanguage solution",
  },
];

export default function WhyChoose() {
  return (
    <Box padding="2rem 0" margin="3rem 0">
      <Heading textAlign="center" marginBottom="2.5rem" fontSize="3rem">
        Why choose TMetric?
      </Heading>
      <SimpleGrid
        width="90%"
        marginInline="auto"
        marginBottom="2rem"
        columns={{ base: 2, xl: 5, lg: 3, md: 2 }}
        gap="2rem"
      >
        {data.map(({ id, img_url, desc }) => (
          <Box
            sx={{
              border: "1px solid lightgray",
              borderRadius: "10px",
              padding: "1.5rem",
            }}
            key={id}
          >
            <Image src={img_url} />
            <Text
              marginTop="1.5rem"
              fontWeight="medium"
              fontSize={{
                base: "1rem",
                xl: "1.2rem",
                lg: "1.2rem",
                md: "1.2rem",
              }}
              w={{ base: "100%", xl: "70%", lg: "70%", md: "80%" }}
            >
              {desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
