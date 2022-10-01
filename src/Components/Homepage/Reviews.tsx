import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function Reviews() {
  const images = [
    {
      id: 1,
      img_url: "https://tmetric.com/media/wlmpffzm/logo_business_endygo.png",
    },
    {
      id: 2,
      img_url:
        "https://tmetric.com/media/0ddgehbk/logo_business_itsyndicate.png",
    },
    {
      id: 3,
      img_url: "https://tmetric.com/media/eozchehq/logo_business_pulso.png",
    },
    {
      id: 4,
      img_url: "https://tmetric.com/media/rmvok0xh/logo_business_050media.png",
    },
    {
      id: 5,
      img_url:
        "https://tmetric.com/media/ccpn231z/logo-business-jot-digi-tal.svg",
    },
    {
      id: 6,
      img_url: "https://tmetric.com/media/z0fhmi1j/logo-business-freshlab.svg",
    },
    {
      id: 7,
      img_url: "https://tmetric.com/media/xjogm2h2/logo-business-mvad.svg",
    },
    {
      id: 8,
      img_url: "https://tmetric.com/media/nvalaok1/logo_business_swaven.png",
    },
  ];

  return (
    <Box margin="2rem 0">
      <Box textAlign="center" backgroundColor="#FFF2CC" paddingBlock="3rem">
        <Heading marginBlock="1rem">Read Hundreds of Reviews</Heading>
        <Image
          marginBlock="2rem"
          marginInline="auto"
          src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg"
        />
        <Heading>4.5 Customer Rating</Heading>
        <Box marginBlock="1rem">
          <Link
            color="#3070F0"
            _hover={{ textDecoration: "none", color: "#2459F6" }}
            href="https://www.capterra.com/p/148624/TMetric/"
          >
            <Heading>242 Reviews</Heading>
          </Link>
        </Box>
      </Box>
      <Box paddingBlock="3rem" backgroundColor="#F6F7F8">
        <Text textAlign="center" marginBottom="2rem">
          Used and trusted by 3000+ businesses in the world
        </Text>
        <Flex
          width={{ base: "95%", xl: "80%", lg: "80%", md: "80%" }}
          marginInline="auto"
          justifyContent="center"
          wrap="wrap"
          gap="2rem"
        >
          {images.map(({ id, img_url }) => (
            <Image key={id} src={img_url} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
