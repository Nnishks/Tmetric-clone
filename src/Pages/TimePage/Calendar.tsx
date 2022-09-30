import { Button, ButtonGroup, Flex, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa"
import { GoPrimitiveDot } from "react-icons/go"
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io"


function GetCalender(){
  const [value, setValue] = useState<Date>(new Date());
//   const [cloneDate, SetCloneDate]=useState<Date>(new Date(value.valueOf()))

  let DateString=value.toDateString().toUpperCase().split(" ")

  const onChange=(date:Date)=>{
    
    setValue(date)
  }
  const handleDate=(val:number)=>{
    if(val===0){
        onChange(new Date())
    }
    else{
    onChange(new Date(value.setDate(value.getDate()+val)))
    }
  }
//   console.log(typeof(value.getDate()))

  return (
    <Flex align="center">
    <Menu> 
  <MenuButton as={Button}  bg="transparent" _hover={{border:"2px solid gray"}}>
    <Flex gap="10px" align="center">
    <FaCalendarAlt/><Text fontSize="lg" fontWeight="semibold">{`${DateString[0]}, ${DateString[2]}  ${DateString[1]} ${DateString[3]}`}</Text>
    </Flex>
  </MenuButton>
  <MenuList>
  <Calendar onChange={onChange} value={value}  />
  </MenuList>
  </Menu>
  
 <Flex gap={0}>
  <Button onClick={()=>handleDate(-1)} borderRadius="50%" p="0" bg="transparent" _hover={{border:"2px solid gray"}} size="sm"><IoIosArrowBack/></Button>
  <Button onClick={()=>handleDate(0)} borderRadius="50%" p="0" bg="transparent" _hover={{border:"2px solid gray"}}size="sm" disabled={value.getDate()===new Date().getDate()}><GoPrimitiveDot/></Button>
  <Button onClick={()=>handleDate(1)} borderRadius="50%"p="0" bg="transparent" _hover={{border:"2px solid gray"}} size="sm" disabled={value.getDate()===new Date().getDate()} ><IoIosArrowForward /></Button>
 </Flex>
    </Flex>
  );
}

export default GetCalender