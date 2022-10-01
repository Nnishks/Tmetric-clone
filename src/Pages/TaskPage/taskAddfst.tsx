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
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { RiBarChartFill } from "react-icons/ri";
type prop = {
  add: boolean;
  setAdd?: Function;
};


const getUserFromLocalStorage = () => {
  try {
      return JSON.parse(localStorage.getItem("taskData")||"");
  } catch (error) {
      return null;
  }
}

export default function FstAdd({ add }: prop) {
  let data:any=getUserFromLocalStorage()

console.log(data)

  const [taskData, setTaskData] = useState<any>(data||[]);
  const [taskText, setTaskText] = useState({
    id: v4(),
    task: "",
    isCompleted: false,
  });
  const [play, setPlay] = useState(false);
  // const [markComplete, setMarkComplete] = useState(false);
  const [selectedData, setSelectedData] = useState({
    id: "",
    task: "",
    isCompleted: false,
  });
  const[activityData,setActivityData]=useState<any>([])
  const handleAdd = () => {
    if(taskText.task!=="")
    {

      setTaskData([...taskData, taskText]);
      localStorage.setItem("taskData", JSON.stringify(taskData));
      setTaskText({id: "",
      task: "",
      isCompleted: false,})
    }
  };

  const handleIsCompleted = (id: any) => {
    let newData = taskData.map((ele: any) =>
      ele.id == id ? { ...ele, isCompleted: !ele.isCompleted } : ele
    );
    

      setTaskData([...newData]);
 
    console.log(id);
  };
  // const handleMarkasCompleted=(id : any)=>{
  //   let newData = taskData.map((ele: any) =>
  //     ele.id == id ? { ...ele, isCompleted: !ele.isCompleted } : ele
  //   );
  //   setTaskData([...newData]);
  //   console.log(newData)
  // }
const handlePlay=()=>{
 setPlay(!play)
 let d=new Date().toString()
 if(selectedData.task!=="")
    {
 setActivityData([...activityData,d])
    }
 console.log(activityData)

}

useEffect(()=>{

},[taskData])
  return (
    <div>
      <Flex>
        <Box w={"50%"}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b>
                      {taskData.length == 0
                        ? "No Project"
                        : `Totel Project is : ${taskData.length}`}
                    </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {taskData.map((ele: any) => (
                  <Box
                    display={"flex"}
                    alignItems="center"
                    gap="5%"
                    onClick={() => setSelectedData(ele)}
                    key={ele.id}
                    borderTop={"1px solid gray"}
                  >
                    <i
                      onClick={() => handleIsCompleted(ele.id)}
                      style={{ color: "#17c22e",border:"1px solid #17c22e",borderRadius:"50%" }}
                      className="fa-solid fa-check"
                    ></i>
                    <Text>{ele.task}</Text>
                  </Box>
                ))}
                {add ? (
                  <Input
                  value={taskText.task}
                    onChange={(e) =>
                      setTaskText({
                        ...taskText,
                        task: e.target.value,
                        id: v4(),
                      })
                    }
                    placeholder="write task name"
                  />
                ) : (
                  "null"
                )}
                <Button onClick={handleAdd}>Add</Button>
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
                onClick={handlePlay}
                style={{ color: play ? "red" : "#17c22e" }}
                className={
                  play ? "fa-solid fa-circle-pause" : "fa-solid fa-circle-play"
                }
              ></i>
              <Button
               
                bg={selectedData.isCompleted ? "#17c22e" : undefined}
                color={selectedData.isCompleted ? "white" : undefined}
                _hover={{
                  backgroundColor: "none",
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
                {selectedData.isCompleted ? "Completed" : "Not Complete"}
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
          <Text color={"gray"} fontSize={"4xl"}>
            {selectedData.task ? selectedData.task : "Selected task"}
           
          </Text>
          <br />
          <Flex justifyContent="space-between" borderBottom={'1px solid gray'} pb='1%' w={"40%"}>
            <Text>Project</Text>
            <Text>Project name</Text>
          </Flex>
          <br />
          <Flex justifyContent="space-between" w={"40%"} borderBottom={'1px solid gray'} pb='1%'>
            <Text>Assignee</Text>
            <Text>User</Text>
          </Flex>
          <br />
          <Flex justifyContent="space-between" w="40%" borderBottom={'1px solid gray'} pb='1%'>
            <Text>Due Date</Text>
            <Input w={"50px"} type={"date"} />
          </Flex>
          <br />
          <Box>
            <Input placeholder="task descreption" />
          </Box>
          <br />
          <Flex justifyContent="space-between" w="40%" borderBottom={'1px solid gray'} pb='1%'>
            <Text>Estimate</Text>
            <Text> None</Text>
          </Flex>
          <br />

{/* //activity */}
<Box h={'150px'} >
      <RiBarChartFill/>
      <Box h={'100%'} overflow={'scroll'}>

      {activityData.map((ele:any,i:any)=><Box key={i} >
<Text>{"activity at "+ele}</Text> <br />
      </Box>  )}
      </Box>
      </Box>

        </Box>
      </Flex>

      
    </div>
  );
}
