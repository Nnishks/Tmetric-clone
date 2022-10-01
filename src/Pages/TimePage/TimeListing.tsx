import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type propChildType={
    description?: string;
    startTime:string;
    endTime:string;
    duration?: string
    project?: string;
    tag?:string
}
type PropsType={
    TimeStampList:Array<propChildType>
}

function TimeListing(prop:PropsType) {
  return (
    <Box  >
    {prop.TimeStampList.map(item=><Box key={new Date().toDateString()+item.startTime}><Flex  p="15px 20px"  justifyContent="space-between">
        <Flex gap="20px">
            <Checkbox></Checkbox>
            {item.description ? <Text>{item.description}</Text>:<Text>(No description)</Text>}
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

export default TimeListing