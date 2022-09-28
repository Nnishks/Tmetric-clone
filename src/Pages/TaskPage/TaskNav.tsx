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
        <div className={styles.taskNavCont}  >
       <Text>My Tasks</Text>
       <Text> | </Text>
       <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Select Assignee
  </MenuButton>
  <MenuList>
    <Input placeholder='Find assigned' />
    <MenuItem> <ImUser/> Unassigned</MenuItem>
    <MenuItem><ImUsers/> All</MenuItem>
   Member
    <MenuItem>Sk Ismile</MenuItem>
  
  </MenuList>
</Menu>
        </div>
    );
}

export default TaskNav;