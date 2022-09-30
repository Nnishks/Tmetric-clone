import { Box, Flex,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,Text,Input } from "@chakra-ui/react";

    
export default function FstAdd(){

return <div  >

    <Flex>

<Box w={'50%'} >
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <b>No project</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>

</Box>

{/* ////////////////// right box*/}
<Box w={'50%'} borderLeft='1px solid black' h={'650px'} >

<Flex justifyContent={"space-between"} w='100%' >
<Flex alignItems={'center'}  gap='20px' > 


<i style={{color:"green",fontSize:"40px"}} className="fa-solid fa-circle-play"></i> 
<Button> <i className="fa-solid fa-check"></i>  Mark Complete</Button>
 </Flex  >
<Flex gap={'40px'} alignItems="center" >
<i className="fa-solid fa-arrow-right"></i>
<i className="fa-sharp fa-solid fa-share-nodes"></i>
<i className="fa-solid fa-ellipsis"></i>
</Flex>
</Flex>
{/* //////////////////////////////////////////////// */}
{/* task name */}
<Text fontSize={'2xl'} >task name</Text>
<Flex justifyContent="space-between" w={'40%'} >
  <Text>Project</Text>
  <Text>Project name</Text>
</Flex>

<Flex justifyContent="space-between" w={'40%'} >
  <Text>Assignee</Text>
  <Text>SK ISMILE</Text>
</Flex>

<Flex justifyContent="space-between" w="40%" >
  <Text>Due Date</Text>
  <Input w={'50px'} type={'date'} />
</Flex>

<Box>
  <Input placeholder="task descreption"  />
</Box>

<Flex justifyContent="space-between" w="40%" >
  <Text>Estimate</Text>
  <Text> None</Text>
</Flex>

</Box>


        
    </Flex>
</div>


}