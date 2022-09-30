import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

type propChildType={
    Break:"Break";
    startTime:string;
    endTime:string;
    duration:string;
}
type PropsType={
    breakStampList:Array<propChildType>
}

function BreakListing(prop:PropsType) {
  return (
    <Box  >
    {prop.breakStampList.map(item=><Box key={new Date().toDateString()+item.startTime}><Flex  p="15px 20px"  justifyContent="space-between">
        <Flex pl="38px">
            <Text>{item.Break}</Text>
        </Flex>
        <Flex gap="20px" align="center">
            <Text fontSize="12px">{item.startTime} - {item.endTime}</Text>
            {item.duration?<Text>{item.duration}</Text>:null}
        </Flex>
    </Flex>
    <hr />
    </Box>)}
    
    </Box>
  )
}

export default BreakListing