import { Button, Flex, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa"
import { GoPrimitiveDot } from "react-icons/go"
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io"


function GetCalender(){
  const [value, setValue] = useState<Date>(new Date());

  let DateString=value.toDateString().split(" ")

  const onChange=(date:Date)=>{
    // console.log(typeof(date))
    setValue(date)
  }
  const handleDate=(val:number)=>{
   
  }
//   console.log(typeof(value.getDate()))

  return (
    <Flex align="center">
    <Menu> 
  <MenuButton as={Button}  bg="transparent" _hover={{border:"2px solid gray"}}>
    <Flex gap="10px" align="center">
    <FaCalendarAlt/><Text>{`${DateString[0]}, ${DateString[2]}  ${DateString[1]} ${DateString[3]}`}</Text>
    </Flex>
  </MenuButton>
  <MenuList>
  <Calendar onChange={onChange} value={value}  />
  </MenuList>
  </Menu>
  
 <Flex>
  <IoIosArrowBack onClick={()=>handleDate(-1)}/>
  <GoPrimitiveDot onClick={()=>handleDate(0)}/>
  <IoIosArrowForward onClick={()=>handleDate(1)}/>
 </Flex>
    </Flex>
  );
}

export default GetCalender