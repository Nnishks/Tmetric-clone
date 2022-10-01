import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function WhatMakesUsBest() {
  return (
    <Tabs>
      <Flex>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>

        <TabList>
          <Box>
            <Tab>One</Tab>
          </Box>
          <Box></Box>
          <Box></Box>
        </TabList>
      </Flex>
    </Tabs>
  );
}
