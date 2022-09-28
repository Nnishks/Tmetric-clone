import { Box,Input,Text } from '@chakra-ui/react';
import React from 'react';
import styles from "./Task.module.css"
import { ImUser,ImUsers } from "react-icons/im";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';



function TaskNav() {
    console.log(styles)
    return (
        <Box className={styles.taskNavCont} fontSize={{base:"10px",sm:"15px",md:"20px",lg:"20px",xl:"20px"}}   >
       <Text>My Tasks</Text>
       <Text> | </Text>
       <Menu size={'10px'}   >
  <Button as={MenuButton}   rightIcon={<ChevronDownIcon/>} w="30%" fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}} bg='none' _hover={{bg:"none"}} >
  Select Assignee
  </Button>
  <MenuList  >
    <Input placeholder='Find assigned' />
    <MenuItem> <ImUser/> Unassigned</MenuItem>
    <MenuItem><ImUsers/> All</MenuItem>
   Member
    <MenuItem>Sk Ismile</MenuItem>
  
  </MenuList>
</Menu>
        </Box>
    );
}

export default TaskNav;