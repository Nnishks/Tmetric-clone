import { Image, Link, SimpleGrid } from "@chakra-ui/react";

export default function Awards() {
  const awards = [
    {
      id: 1,
      img_url:
        "https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png",
      url: "https://www.saasworthy.com/product/tmetric",
    },
    {
      id: 2,
      img_url: "https://tmetric.com/media/w4mhgaul/time-tracking-software.png",
      url: "https://www.softwareworld.co/time-tracking-software/#TMetric",
    },
    {
      id: 3,
      img_url: "https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png",
      url: "https://crozdesk.com/operations-management/time-management-software/tmetric",
    },
    {
      id: 4,
      img_url: "https://tmetric.com/media/c2eewysw/g2_2022_main_page.png",
      url: "https://www.g2.com/products/tmetric/reviews",
    },
    {
      id: 5,
      img_url: "https://tmetric.com/media/a00doqsb/icon-customer-rating.png",
      url: "https://www.capterra.com/p/148624/TMetric/",
    },
    {
      id: 6,
      img_url: "https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png",
      url: "https://www.softwaresuggest.com/tmetric-free-time-tracker",
    },
    {
      id: 7,
      img_url: "https://tmetric.com/media/jfxavlps/getapp-logotype.svg",
      url: "https://www.getapp.com/project-management-planning-software/a/tmetric/",
    },
  ];

  return (
    <SimpleGrid
      alignItems="center"
      //   justifyContent="center"
      gap="1rem"
      columns={{ base: 4, xl: 7, lg: 6, md: 5 }}
      textAlign="center"
    >
      {awards.map((item) => (
        <Link href={item.url} key={item.id}>
          <Image
            margin="auto"
            w={{ base: "4rem", xl: "7rem", lg: "6rem", md: "5rem" }}
            src={item.img_url}
          />
        </Link>
      ))}
    </SimpleGrid>
  );
}
