import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./Task.module.css";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon, SmallAddIcon } from "@chakra-ui/icons";
import EmptyTask from "./emptyTask";
import FstAdd from "./taskAddfst";

type prop={
  add:boolean,
  setAdd:Function
}


function TaskMain({add,setAdd}:prop) {
  // const [isEmpty,setIsEmpty]=useState()
  return (
    <div className={styles.taskMainCont}>
      <Flex
        borderBottom="1px solid black"
        h={{ base: "30px", sm: "30px", md: "30px", lg: "40px", xl: "50px" }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Flex w={"50%"} height="100%"  gap="5%">
          <Box

            w={{
              base: "50px",
              sm: "150px",
              md: "200px",
              lg: "200px",
              xl: "200px",
            }}
            height="100%"
          >
            <Button
         
              h="100%"
              w={'100%'}
              fontSize={{
                base: "20%",
                sm: "50%",
                md: "70%",
                lg: "100%",
                xl: "100%",
              }}
              p="0px"
              bg={"#3070f0"}
              color="white"
              as={Button}
              onClick={()=>setAdd(!add)}
            >
              <SmallAddIcon />
              New Task
            </Button>
          </Box>
          <Box 
          
          w={{
            base: "50px",
            sm: "150px",
            md: "200px",
            lg: "200px",
            xl: "200px",
          }}
          height="100%"
          
          
          >
            <Menu>
              <MenuButton
              w={'100%'}
                as={Button}
                h="100%"
                fontSize={{
                  base: "20%",
                  sm: "50%",
                  md: "70%",
                  lg: "100%",
                  xl: "100%",
                }}
                p="0px"
                rightIcon={<ChevronDownIcon />}
              >
                Sort:Project
              </MenuButton>
              <MenuList>
                <MenuItem>Project</MenuItem>
                <MenuItem>Estimate</MenuItem>
                <MenuItem>Due Date</MenuItem>
                <MenuItem>Last Updated</MenuItem>
                <MenuItem>Newer First</MenuItem>
                <MenuItem>Older First</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Flex  w={"20%"} h="100%" alignItems={"center"}>
          <Input fontSize={'sm'} w={'100%'} placeholder="Search" h={"50%"} />
        </Flex>
      </Flex>

      {/* ///////////////////////inside */}
      {!add ? <EmptyTask /> : <FstAdd add={add} />}
    </div>
  );
}

export default TaskMain;
