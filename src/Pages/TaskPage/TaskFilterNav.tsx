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
          <Box w={'15%'}  >
          <Menu >
              <Button  as={MenuButton}  border='1px solid black'    
              rightIcon={<ChevronDownIcon/>}
              w='100%' h={'70%'} bg='none' _hover={{bg:"none"}} textAlign={'left'} p='0px'  fontSize={{base:"30%",sm:"60%",md:"70%",lg:"100%",xl:"100%"}}  >
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
  <Button  as={MenuButton} border='1px solid black'   rightIcon={<ChevronDownIcon/>}  w='100%' h={'70%'} bg='none' _hover={{bg:"none"}} textAlign={'left'} p='0px'  fontSize={{base:"30%",sm:"60%",md:"70%",lg:"100%",xl:"100%"}} >
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
  <Button  as={MenuButton} border='1px solid black'  rightIcon={<ChevronDownIcon/>}  w='100%' h={'70%'} bg='none' _hover={{bg:"none"}} textAlign={'left'} p='0px'  fontSize={{base:"30%",sm:"60%",md:"70%",lg:"100%",xl:"100%"}} >
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
  <Button  as={MenuButton} border='1px solid black'  rightIcon={<ChevronDownIcon/>}  w='100%' h={'70%'} bg='none' _hover={{bg:"none"}} textAlign={'left'} p='0px'  fontSize={{base:"30%",sm:"60%",md:"70%",lg:"100%",xl:"100%"}} >
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
  <Button  as={MenuButton}
  
  rightIcon={<ChevronDownIcon/>} border='1px solid black'  w='100%' h={'70%'} bg='none' _hover={{bg:"none"}} textAlign={'left'} p='0px'  fontSize={{base:"30%",sm:"60%",md:"70%",lg:"100%",xl:"100%"}} >    
  Creator : Any
  </Button>
  <MenuList>
    <MenuItem> Unassigned</MenuItem>
    <MenuItem> All</MenuItem>
    <MenuItem>Sk Ismile</MenuItem>
  </MenuList>
</Menu>

 </Box>



          <Box w={'17%'} ><Menu>
  <Button w='100%' h={'70%'} bg='none' _hover={{bg:"none"}}   as={MenuButton} border='1px solid black' textAlign={'left'} p='0px'  fontSize={{base:"30%",sm:"60%",md:"70%",lg:"100%",xl:"100%"}}  >
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





//   textOverflow="ellipsis" 
//  maxWidth={"90%"} display="inline-block" whiteSpace={"nowrap"} overflow="hidden"
  // fontSize={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%"}}