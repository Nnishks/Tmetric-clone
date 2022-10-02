import { Box, HStack, Flex, Menu, MenuButton, MenuList, MenuItem, Button, Text, Icon, useMediaQuery } from '@chakra-ui/react'
import {AiFillPlayCircle} from "react-icons/ai"
import { CgPlayStopO } from "react-icons/cg"
import { IoMdAddCircle } from "react-icons/io"




import React, {useState} from 'react'
import GetCalender from './Calendar'
import Timeline from './Timeline'
import WorkTimeEntry from './WorkTimeEntry'
import SideBar from '../Sidebar'


const Time = () => {
  const [state, setState]=useState<boolean>(false)
  const [isNotMidScreen]=useMediaQuery(`(min-width:1050px)`)
    
  return (
    <Box>
      <SideBar/>
    <Flex  m={isNotMidScreen?"10px 14rem": "10px 1rem"} p="10px" justifyContent="space-between" fontSize="lg" align="center">
      <Flex align="center">
        {state? <Icon as={IoMdAddCircle} color="teal" fontSize="40px" onClick={()=>{setState(false)}}/>:<Icon as={AiFillPlayCircle} color="teal" fontSize="40px" onClick={()=>{setState(true)}}/>}
      <Icon as={CgPlayStopO} color="red" fontSize="40px"/>
      <Text fontSize="lg" fontWeight="semibold" ml="20px">MY TIME</Text>
      </Flex>
      <GetCalender/>
    </Flex>
    <Timeline/>
    <WorkTimeEntry/>
    </Box>
  )
}

export default Time