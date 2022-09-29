import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react';
import styles from "./Task.module.css"
import { Button, Menu,
    MenuButton,
    MenuList,
    MenuItem} from '@chakra-ui/react';
    import { ChevronDownIcon } from '@chakra-ui/icons';
import EmptyTask from './emptyTask';
function TaskMain() {
    return (
        <div className={styles.taskMainCont} >
        <Flex justifyContent={"space-between"} >
          <Flex w={'40%'}
          //  border={'1px solid red'}
            gap="2%"  >
        <Menu>
  <MenuButton bg={'#3070f0'} color='white' as={Button} rightIcon={<ChevronDownIcon/>}>
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
</Flex>
<Box>

<Input placeholder='Search' />
</Box>
            </Flex> 

<EmptyTask/>

        </div>
    );
}

export default TaskMain;