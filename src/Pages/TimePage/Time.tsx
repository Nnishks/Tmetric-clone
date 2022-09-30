import { Box, HStack, Flex, Menu, MenuButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react'
import {AiFillPlayCircle} from "react-icons/ai"
import { CgPlayStopO } from "react-icons/cg"
import { IoMdAddCircle } from "react-icons/io"




import React from 'react'
import GetCalender from './Calendar'
import Timeline from './Timeline'
import WorkTimeEntry from './WorkTimeEntry'
import Listing from './TimeListing'

const Time = () => {
  return (
    <Box border="1px solid black">
    <Flex border="1px solid red" m="10px 14rem" p="10px" justifyContent="space-between" fontSize="lg" align="center">
      <Flex align="center">
      <AiFillPlayCircle/>
      <IoMdAddCircle/>
      <CgPlayStopO/>
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