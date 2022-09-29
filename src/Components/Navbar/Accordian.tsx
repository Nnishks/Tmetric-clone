import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

// type MobileMenuProps = {
//   menuTitle: string;
// };

export default function Accordian({ menuTitle, menuItems }: any) {
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
            Heading2
          </Text>
          {menuItems.map((item: any) => (
            <Box margin="1rem 0" key={item.id}>
              {item.title}
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
