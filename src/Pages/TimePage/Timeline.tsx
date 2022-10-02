import { Box, Flex, Slider, SliderFilledTrack, SliderTrack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

function Timeline() {

    const [isNotMidScreen]=useMediaQuery(`(min-width:1050px)`)
  return (
        <Box border="1px solid gray"  m={isNotMidScreen?"10px 8rem": "10px 1rem"} p={isNotMidScreen?"20px 60px":"20px 20px"}  borderRadius="5px">
        <Flex justifyContent="space-between" mb="50px">
            <Box>
                <Text  fontSize="md">Total</Text>
                <Text fontSize="xl" fontWeight="semibold" >30 min</Text>
            </Box>
            <Box>
                <Text fontSize="md">Monthly Balance</Text>
                <Text fontSize="xl" fontWeight="semibold" >7 hr 30 min</Text>
            </Box>
        </Flex>
        <Text textAlign="center" mb="-10px" fontSize={isNotMidScreen?"sm":"xs"}>There are no activity level bars. They are recorded by the desktop app every 10 minutes</Text>
        <Slider aria-label='slider-ex-2' colorScheme='blue' defaultValue={30}>
            
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
</Slider>
<Flex justifyContent="space-between" mb="50px">
    <Text fontSize="10px">9:00</Text>
    <Text fontSize="10px">9:30</Text>
    <Text fontSize="10px">10:00</Text>
    <Text fontSize="10px">10:30</Text>
    <Text fontSize="10px">11:00</Text>
    <Text fontSize="10px">11:30</Text>
    <Text fontSize="10px">12:00</Text>
    <Text fontSize="10px">12:30</Text>
    <Text fontSize="10px">1:00</Text>
    <Text fontSize="10px">1:30</Text>
    <Text fontSize="10px">2:00</Text>
    <Text fontSize="10px">2:30</Text>
    <Text fontSize="10px">3:00</Text>

</Flex>
    </Box>
  )
}

export default Timeline