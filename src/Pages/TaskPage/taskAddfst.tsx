import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import {useState} from "react"

let data=["wrfhwirfweifw 1","wrfhwirfweifw 2","wrfhwirfweifw 3","wrfhwirfweifw 4","wrfhwirfweifw 5",]
export default function FstAdd() {
  const[play,setPlay]=useState(false)
  const[markComplete,setMarkComplete]=useState(false)
  console.log(play)
  return (
    <div>
      <Flex>
        <Box w={"50%"}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b>No project</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               {

                data.map((ele)=><Box borderTop={'1px solid gray'} >
<Text>{ele}</Text> 

                </Box>)

               }
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* ////////////////// right box*/}
        <Box
          w={"50%"}
          borderLeft="1px solid black"
          h={"650px"}
          pl={{ base: "0px", sm: "3px", md: "5px", lg: "10px", xl: "10px" }}
          pt={{ base: "0px", sm: "3px", md: "5px", lg: "10px", xl: "10px" }}
        >
          <Flex justifyContent={"space-between"} w="100%">
            <Flex
              alignItems={"center"}
              w="50%"
              gap="10%"
              fontSize={{
                base: "15px",
                sm: "15px",
                md: "20px",
                lg: "40px",
                xl: "40px",
              }}
            >
              <i
              onClick={()=>setPlay(!play)}
                style={{ color:play? "red":"green" }}
                className= {play?"fa-solid fa-circle-pause":"fa-solid fa-circle-play"} 
              ></i>
              <Button
              
            onClick={()=>setMarkComplete(!markComplete)}
              bg={markComplete?"green":undefined}
              color={markComplete?"white":undefined}
              _hover={{
                backgroundColor:"none"
              }}
                h={"70%"}
                fontSize={{
                  base: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "15px",
                  xl: "25px",
                }}
               
              >
                {/* <i className="fa-solid fa-check"></i> */}
               {markComplete?"Completed":"Mark Complete"} 
              </Button>
            </Flex>

            <Flex
              gap={"20%"}
              w="30%"
              p="2%"
              justifyContent={"flex-end"}
              alignItems="center"
              fontSize={{
                base: "10px",
                sm: "10px",
                md: "15px",
                lg: "18px",
                xl: "20px",
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
              <i className="fa-sharp fa-solid fa-share-nodes"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </Flex>
          </Flex>
          <br />
          <br />
          {/* //////////////////////////////////////////////// */}
          {/* task name */}
          <Text fontSize={"2xl"}>task name</Text>
          <br />
          <Flex justifyContent="space-between" w={"40%"}>
            <Text>Project</Text>
            <Text>Project name</Text>
          </Flex>
          <br />
          <Flex justifyContent="space-between" w={"40%"}>
            <Text>Assignee</Text>
            <Text>SK ISMILE</Text>
          </Flex>
          <br />
          <Flex justifyContent="space-between" w="40%">
            <Text>Due Date</Text>
            <Input w={"50px"} type={"date"} />
          </Flex>
          <br />
          <Box>
            <Input placeholder="task descreption" />
          </Box>
          <br />
          <Flex justifyContent="space-between" w="40%">
            <Text>Estimate</Text>
            <Text> None</Text>
          </Flex>
          <br />
        </Box>
      </Flex>
    </div>
  );
}
