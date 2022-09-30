import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

const data = [
  {
    id: 1,
    title: "Software Developers",
    desc: `We ultimately went with TMetric because it checked a lot of
    items on our want list. It’s both a desktop and web app, and
    has an API that we were able to integrate with our business
    management software. While that was the biggest selling
    point, we also really like the user interface, the Chrome
    extension, and built-in integration with Jira.`,
    url: "https://blog.tmetric.com/how-bizstream-streamlined-their-workflow-with-tmetric/",
    name: "BizStream team",
    photo: "https://tmetric.com/media/hznb1sgs/photo-software-developers.png",
  },
  {
    id: 2,
    title: "Marketers",
    desc: `We’ve found TMetric to be both user friendly and robust. It was easy to setup which allowed us to begin leveraging the tool immediately. It also provides multiple layers of reporting which provides value to our organization on a number of different levels.`,
    url: "https://blog.tmetric.com/bankbound-success-story/",
    name: "Brian Reilly, BankBound",
    photo: "https://tmetric.com/media/dhbotvr1/photo-marketers.png",
  },
  {
    id: 3,
    title: "Designers",
    desc: `TMetric is faster, more convenient and cheaper, the support is responsive and they fixed some bugs quickly.`,
    url: "https://blog.tmetric.com/floowedit-success-story/",
    name: "Swen Roethlisberger, Floowedit",
    photo: "https://tmetric.com/media/bxyho4oy/photo-designers.png",
  },
  {
    id: 4,
    title: "Contractors",
    desc: `Works for me!
      I recently transitioned from full-time employee to ‘consultant’. Needed an app to track projects, tasks and generate billing based on our agreement. TMetric handles this elegantly and I can access from my iPhone, iPad or PC- awesome!`,
    url: "https://tmetric.com/customer-stories",
    name: "Jim Rolph, Manufacturer's Representative at Gorman Company",
    photo: "https://tmetric.com/media/2pdfttnr/photo-contractors.png",
  },
  {
    id: 5,
    title: "Consultants",
    desc: `After five months we are very happy with the app and will gladly renew the service. We are still finding new uses for it within our organization and it’s been pivotal for helping us gather better decision-making information, grow our topline and reduce our bottomline.`,
    url: "https://blog.tmetric.com/how-tmetric-is-helping-consulting-agency-to-scale/",
    name: "Galeno Chua, The Idea Founding Principal",
    photo: "https://tmetric.com/media/ipkhp5ts/photo-consulting.png",
  },
  {
    id: 6,
    title: "Freelancers",
    desc: `There are plenty of available applications to monitor working time. We chose TMetric because of the suitable price and compatibility with Trello and Google Documents, which we use every day in our company.`,
    url: "https://blog.tmetric.com/how-tmetric-helped-mylead-affiliate-network-grow-the-company/",
    name: "Patryk Hoffmann, MyLead",
    photo: "https://tmetric.com/media/1nlgnvyj/photo-freelance.png",
  },
];

export default function WhyTrackTabs() {
  const [lessthantab] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      width={{ base: "90%", xl: "70%", lg: "90%", md: "90%" }}
      marginInline="auto"
      paddingBlock="3rem"
      marginBlock="3rem"
    >
      <Box>
        <Heading textAlign="center" marginBottom="2rem">
          Why Track time with TMetric
        </Heading>
      </Box>
      <Tabs defaultIndex={0}>
        <TabPanels>
          {data.map(({ id, desc, url, name, photo }) => (
            <TabPanel key={id}>
              <Box>
                <Flex justifyContent="space-between" gap="2rem">
                  <Box w={{ base: "100%", xl: "60%", lg: "80%", md: "100%" }}>
                    <Text fontWeight="medium" fontSize="1.2rem">
                      {desc}
                    </Text>
                    <Flex
                      marginTop="2rem"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box
                        paddingTop="0.5rem"
                        paddingRight="3rem"
                        borderTop="1px solid lightgray"
                      >
                        <Text marginBottom="10px" fontWeight="medium">
                          {name}
                        </Text>
                        <Image src="https://tmetric.com/media/j2klt5pd/img-rating-5.svg" />
                      </Box>
                      <Box>
                        <Link
                          color="#3070F2"
                          _hover={{ color: "#2459F6" }}
                          href={url}
                        >
                          <Flex fontWeight="medium" alignItems="center">
                            <Text mr="10px">Read Full Story</Text>
                            <Icon as={AiOutlineArrowRight} />
                          </Flex>
                        </Link>
                      </Box>
                    </Flex>
                  </Box>
                  {lessthantab ? (
                    ""
                  ) : (
                    <Box width="30%">
                      <Image src={photo} />
                    </Box>
                  )}
                </Flex>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
        <TabList overflowX="scroll" overflowY="hidden">
          {data.map(({ id, title }) => (
            <Tab key={id} fontWeight="medium">
              {title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
}
