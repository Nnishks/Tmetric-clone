import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import { BsFillStopwatchFill } from "react-icons/bs";

type SubmenuItemProps = {
  title: string;
  desc: string;
  toggler: Function;
};

export default function SubmenuItem({
  title,
  desc,
  toggler,
}: SubmenuItemProps) {
  return (
    <a href="#">
      <Flex onClick={() => toggler()} gap="1rem">
        <Box>
          <Icon boxSize="2rem" color="#777E85" as={BsFillStopwatchFill} />
        </Box>
        <Box _hover={{ color: "blue" }}>
          <Text mb="0.5rem" transition="0.2s all ease-in">
            {title}
          </Text>
          <Text
            color="#4C5157"
            fontWeight="medium"
            fontFamily="sans-serif"
            mb="1rem"
            maxW="12rem"
          >
            {desc}
          </Text>
        </Box>
      </Flex>
    </a>
  );
}
