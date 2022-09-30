import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const appsLink = [
  {
    id: 1,
    img_url: "https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg",
    url: "https://tmetric.com/integrations/google-apps-time-tracking",
  },
  {
    id: 2,
    img_url: "https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg",
    url: "https://tmetric.com/integrations/microsoft-office-online-time-tracking-tmetric",
  },
  {
    id: 3,
    img_url: "https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg",
    url: "https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg",
  },
  {
    id: 4,
    img_url: "https://tmetric.com/media/smflyk5w/logo-integration-github.svg",
    url: "https://tmetric.com/integrations/github-time-tracking",
  },
  {
    id: 5,
    img_url: "https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg",
    url: "https://tmetric.com/integrations/excel-time-tracking-tmetric",
  },
  {
    id: 6,
    img_url: "https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg",
    url: "https://tmetric.com/integrations/asana-time-tracking",
  },
  {
    id: 7,
    img_url: "https://tmetric.com/media/caxbzjss/logo-integration-jira.svg",
    url: "https://tmetric.com/integrations/jira-time-tracking",
  },
  {
    id: 8,
    img_url: "https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg",
    url: "https://tmetric.com/integrations/gitlab-time-tracking",
  },
  {
    id: 9,
    img_url: "https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg",
    url: "https://tmetric.com/integrations/google-apps-time-tracking",
  },
  {
    id: 10,
    img_url: "https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg",
    url: "https://tmetric.com/integrations/trello-time-tracking",
  },
  {
    id: 11,
    img_url: "https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg",
    url: "https://tmetric.com/integrations/redmine-time-tracking",
  },
  {
    id: 12,
    img_url: "https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg",
    url: "https://tmetric.com/integrations/zendesk-time-tracking",
  },
  {
    id: 13,
    img_url: "https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg",
    url: "https://tmetric.com/integrations/wrike-time-tracking",
  },
];

export default function Integration() {
  return (
    <Box width="100%">
      <Box
        margin="5rem auto"
        width={{ base: "90%", xl: "70%", lg: "90%", md: "90%" }}
        textAlign="center"
      >
        <Heading
          fontSize={{ base: "2.5rem", xl: "3.5rem", lg: "3.5rem", md: "3rem" }}
          color="#292E33"
          padding="0 0.75rem"
        >
          Integration with 50+ popular services
        </Heading>
        <Text fontSize="1.35rem" marginBlock="2rem">
          TMetric integrates with dozens of services, which lets you measure
          progress and activity in any tool you use.
        </Text>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", xl: "row", lg: "row", md: "column" }}
          gap="2rem"
        >
          <NavLink to="/signup">
            <Button
              backgroundColor="#3070F0"
              _hover={{ backgroundColor: "#2258F5" }}
              color="white"
              padding="1.5rem 2rem"
              borderRadius="3px"
              margin={{ sm: "auto", md: "auto" }}
            >
              Start Free Trial
            </Button>
          </NavLink>
          <Link
            color="#3070F0"
            _hover={{ color: "#275AF5", textDecoration: "0" }}
            href=""
          >
            <Flex alignItems="center" gap="5px">
              <Text fontWeight="medium">Explore All Integrations</Text>
              <Icon as={AiOutlineArrowRight} />
            </Flex>
          </Link>
        </Flex>

        <Flex wrap="wrap" justifyContent="center" gap="1.25rem" margin="3rem 0">
          {appsLink.map((item) => (
            <Link href={item.url} key={item.id}>
              <Flex
                border="1px solid lightgray"
                padding="2rem 0.5rem"
                borderRadius="15px"
                key={item.id}
              >
                <Image src={item.img_url} />
              </Flex>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
