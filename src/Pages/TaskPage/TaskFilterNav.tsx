import { Button, Menu,
    MenuButton,
    MenuList,
    MenuItem,Input, } from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styles from "./Task.module.css"
function TaskFilterNav() {
    return (
        <div className={styles.taskFilterNav} >
           <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Client : All
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu>   
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Project : All
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Tag : All
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Status : Open
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Creator : Any
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
  Source : Internal
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
        </div>
    );
}

export default TaskFilterNav;