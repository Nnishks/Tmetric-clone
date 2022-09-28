import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react';
import styles from "./Task.module.css"
import { Button, Menu,
    MenuButton,
    MenuList,
    MenuItem} from '@chakra-ui/react';
    import { ChevronDownIcon } from '@chakra-ui/icons';
function TaskMain() {
    return (
        <div className={styles.taskMainCont} >
        <Flex>
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
<Input/>
            </Flex> 
        </div>
    );
}

export default TaskMain;