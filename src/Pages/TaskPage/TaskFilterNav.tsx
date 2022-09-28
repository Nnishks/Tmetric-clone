import { Button, Menu,
    MenuButton,
    MenuList,
    MenuItem,Input, Text,Box} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styles from "./Task.module.css"
function TaskFilterNav() {
    return (
        <div className={styles.taskFilterNav} >
          <Box w={'15%'} >
          <Menu>
  <Button as={MenuButton} border='1px solid black'    
  rightIcon={<ChevronDownIcon/>}
//   textOverflow="ellipsis" 
//  maxWidth={"90%"} display="inline-block" whiteSpace={"nowrap"} overflow="hidden"
  // fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}}
   bg='none' _hover={{bg:"none"}}>
Client : All 
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
          </Box>

          <Box w={'15%'} ><Menu>
  <Button as={MenuButton} border='1px solid black'   rightIcon={<ChevronDownIcon/>}  fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}} bg='none' _hover={{bg:"none"}}>
  Project : All
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 

</Box>

          <Box w={'15%'} ><Menu>
  <Button as={MenuButton} border='1px solid black'  rightIcon={<ChevronDownIcon/>}  fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}} bg='none' _hover={{bg:"none"}}>
  Tag : All
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
</Box>



          <Box w={'15%'} ><Menu>
  <Button as={MenuButton} border='1px solid black'  rightIcon={<ChevronDownIcon/>}  fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}} bg='none' _hover={{bg:"none"}}>
  Status : Open
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
</Box>


          <Box w={'15%'} ><Menu>
  <Button as={MenuButton} border='1px solid black'  rightIcon={<ChevronDownIcon/>}  fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}} bg='none' _hover={{bg:"none"}}>
  Creator : Any
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu>

 </Box>



          <Box w={'15%'} ><Menu>
  <Button as={MenuButton} border='1px solid black'  fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}} bg='none' _hover={{bg:"none"}}>
 <Text> Source : Internal</Text>
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu> 
</Box>
      
             





        </div>
    );
}

export default TaskFilterNav;