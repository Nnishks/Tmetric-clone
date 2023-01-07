import { ChevronDownIcon } from '@chakra-ui/icons'
import {BiTime} from "react-icons/bi"
import {IoMdTime} from "react-icons/io"

import { Box, Button, Flex, FormLabel, Input, InputGroup, InputRightAddon, useMediaQuery } from '@chakra-ui/react'
import React, {useState} from 'react'

type Proptype={
    handleCancel:Function;
    handleSubmit:Function;
}

type TimeType={
    description?: string;
    startTime:string;
    endTime:string;
    duration?: string
    project?: string;
    tag?:string
}

const initState:TimeType={
    description: "",
    startTime:"",
    endTime:"",
    duration:"",
    project:"",
    tag:"" 
} 

function AddTimeEntry(prop:Proptype) {
  
    const [timeFormData, setTimeFormData]= useState<TimeType>(initState)
    const [isNotMidScreen]=useMediaQuery(`(min-width:1050px)`)


const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}=e.target
    let newTimeFormData={...timeFormData, [name]: value}
    setTimeFormData(newTimeFormData)
}

// const calculateDuration=()=>{
//     if(timeFormData.startTime && timeFormData.startTime){
//         let [startHr, startMinStr]=timeFormData.startTime.split(":")
//         let [startMin, startStr]=startMinStr.split(" ")
//         let [endHr, endMinStr]=timeFormData.endTime.split(":")
//         let [endMin, endStr]=endMinStr.split(" ")
//         if(+startHr=== +endHr){
//          if(+startMin=== +endMin){
//             return `0 hr 0 min`
//          }
//          else if(+startHr< +endHr)
//          return (`0 hr ${+endMin - +startMin} min`)
//         }
//         else if(+startHr < +endHr){
//             if(+startMin=== +endMin){
//                 return `${+endHr - +startHr} hr 0 min`
//              }
//              else if(+startHr< +endHr)
//              return (`${+endHr - +startHr} hr ${+endMin - +startMin} min`)
//         }
//         return 
//     }
// }



  return (
    <Box p="15px 20px" borderRadius="5px" boxShadow="0 0 0.25rem rgb(15 28 41 / 20%), 0 0.5rem 0.75rem rgb(15 28 41 / 20%);">
        <form onSubmit={(e)=>{prop.handleSubmit(e,timeFormData)
       setTimeFormData(initState) }}>
            <Flex justifyContent="space-between" mb="20px" flexWrap="wrap">
            <Box>
            <FormLabel fontSize="12px" mb="3px">Description</FormLabel>
            <InputGroup size="sm" >
            <Input type="text" name='description' value={timeFormData.description} borderColor="gray" onChange={handleChange} borderRadius="5px" placeholder='Describe your task' htmlSize={isNotMidScreen?70: 40} width="auto"></Input>
            <InputRightAddon children={<ChevronDownIcon />} />
            </InputGroup>
            </Box>
            <Flex gap="20px" flexWrap="wrap">
            <Box>
            <FormLabel fontSize="12px" mb="3px">Start Time</FormLabel>
            <InputGroup size="sm" >
            <Input type="text" borderColor="gray" name="startTime" isRequired value={timeFormData.startTime} onChange={handleChange} borderRadius="5px" placeholder='hh:mm' htmlSize={6} width="auto"></Input>
            <InputRightAddon children={<BiTime />} />
            </InputGroup>
            </Box>
            <Box>

            <FormLabel fontSize="12px" mb="3px">End Time</FormLabel>
            <InputGroup size="sm">
            <Input type="text" borderColor="gray" name="endTime" isRequired value={timeFormData.endTime} onChange={handleChange} borderRadius="5px" placeholder='hh:mm'  htmlSize={6} width="auto"></Input>
            
            <InputRightAddon children={<IoMdTime />} />

            </InputGroup>
            </Box>
            <Box>

            <FormLabel fontSize="12px" mb="3px">Duration</FormLabel>
            <Input type="text" borderColor="gray" value={timeFormData.duration} isRequired onChange={handleChange} size="sm" name="duration" borderRadius="5px" placeholder='h:mm' htmlSize={6} width="auto"></Input>
            </Box>
            </Flex>
            
            </Flex >
            <Flex gap="30px" mb="20px" flexWrap="wrap">
            <Box>
            <FormLabel fontSize="12px" mb="3px">Projects</FormLabel>
            <Input type="text" borderColor="gray" size="sm" name="project" value={timeFormData.project} onChange={handleChange} borderRadius="5px" placeholder='+ Enter project name' htmlSize={50} width="auto"></Input>
            </Box>
            <Box>
            <FormLabel fontSize="12px" mb="3px">Tags</FormLabel>
            <Input type="text" borderColor="gray" size="sm" name="tag" value={timeFormData.tag} borderRadius="5px" onChange={handleChange} placeholder='No tags' htmlSize={30} width="auto"></Input>
            </Box>
            </Flex>
             
            <Flex>
            <Input type="submit" value="Save"  size="sm" borderRadius="5px" bg="#3070f0" color="White" p="0 30px" width="auto"></Input>

            <Button size="sm" p="0 30px" ml="30px" onClick={()=>{prop.handleCancel()}}>Cancel</Button>    
            </Flex>

        </form>
    </Box>
  )

}

export default AddTimeEntry