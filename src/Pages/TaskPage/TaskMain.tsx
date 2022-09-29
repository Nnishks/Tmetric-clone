import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react';
import styles from "./Task.module.css"
import { Button, Menu,
    MenuButton,
    MenuList,
    MenuItem} from '@chakra-ui/react';
    import { ChevronDownIcon, SmallAddIcon } from '@chakra-ui/icons';
import EmptyTask from './emptyTask';
import FstAdd from './taskAddfst';
function TaskMain() {
    return (
        <div className={styles.taskMainCont} >
        <Flex  borderBottom='1px solid black' h={'50px'} alignItems='center' justifyContent={"space-between"} >
          <Flex w={'50%'} 
          //  border={'1px solid red'}
            gap="5%"  >
<Box  w={'40%'} >


        <Menu>
  <MenuButton w={'100%'} fontSize={{base:"20%",sm:"50%",md:"70%",lg:"100%",xl:"100%"}}  p='0px'   bg={'#3070f0'} color='white' as={Button} rightIcon={<ChevronDownIcon/>}><SmallAddIcon/>New Task
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
</Box>
<Box w={'40%'} >

<Menu>
  <MenuButton as={Button} w={'100%'}  fontSize={{base:"20%",sm:"50%",md:"70%",lg:"100%",xl:"100%"}}  p='0px' rightIcon={<ChevronDownIcon/>}>
  Sort:Project
  </MenuButton>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
</Box>
</Flex>
<Flex  w={'20%'} h="100%" alignItems={'center'}   >

<Input placeholder='Search' h={'50%'}  />
</Flex>
            </Flex> 



{/* ///////////////////////inside */}
{/* <EmptyTask/> */}

<FstAdd/>

        </div>
    );
}

export default TaskMain;