import { Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react'

import React from 'react'
import {BiTime} from "react-icons/bi"
import {IoMdTime} from "react-icons/io"

type Proptype={
    handleCancel:Function;
}
function AddBreak(prop:Proptype) {
  return (
    <Box p="15px 20px" borderRadius="5px"  boxShadow="0 0 0.25rem rgb(15 28 41 / 20%), 0 0.5rem 0.75rem rgb(15 28 41 / 20%);">
        <Text size="lg" fontWeight="semibold" mb="15px">Add Break</Text>
        <form>
        <Flex gap="20px" mb="20px">
            <Box>
            <FormLabel fontSize="12px" mb="3px">Start Time</FormLabel>
            <InputGroup size="sm" >
            <Input type="text" borderColor="gray"  borderRadius="5px" placeholder='Enter time' htmlSize={6} width="auto"></Input>
            <InputRightAddon children={<BiTime />} />
            </InputGroup>
            </Box>
            <Box>

            <FormLabel fontSize="12px" mb="3px">End Time</FormLabel>
            <InputGroup size="sm">
            <Input type="text" borderColor="gray"  borderRadius="5px" placeholder='Enter time'  htmlSize={6} width="auto"></Input>
            
            <InputRightAddon children={<IoMdTime />} />

            </InputGroup>
            </Box>
            <Box>

            <FormLabel fontSize="12px" mb="3px">Duration</FormLabel>
            <Input type="text" borderColor="gray" size="sm" borderRadius="5px" placeholder='Duration' htmlSize={6} width="auto"></Input>
            </Box>
            </Flex>

            <Flex>
            <Input type="submit" value="Save"  size="sm" borderRadius="5px" bg="#3070f0" color="White" p="0 30px" width="auto"></Input>

            <Button size="sm" p="0 30px" ml="30px" onClick={()=>{prop.handleCancel()}}>Cancel</Button>    
            </Flex>
            </form>
            
    </Box>
  )
}

export default AddBreak