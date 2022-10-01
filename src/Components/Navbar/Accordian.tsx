import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

// type MobileMenuProps = {
//   menuTitle: string;
// };

export default function Accordian({ menuTitle, menuItems, subTitle }: any) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontWeight="medium" flex="1" textAlign="left">
              {menuTitle}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text color="gray" m="0.5rem 0">
            {subTitle}
          </Text>
          {menuItems.map((item: any) => (
            <Flex alignItems="center" margin="1rem 0" key={item.id} gap="1rem">
              <Image w="1.5rem" src={item.img_url} />
              {item.title}
            </Flex>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
