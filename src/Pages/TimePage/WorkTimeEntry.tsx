import { Box, Button, ButtonGroup, Checkbox, Flex, useMediaQuery } from '@chakra-ui/react'
import React,{useState} from 'react'
import AddBreak from './AddBreak'
import AddTimeEntry from './AddTimeEntry'
import BreakListing from './BreakListing'
import TimeListing from './TimeListing'



const storeTimeData=localStorage.getItem("ListStamps")
const storeBreakData=localStorage.getItem("BreakStamps")

type TimeStampType={
    description?: string;
    startTime:string;
    endTime:string;
    duration: string
    project?: string;
    tag?:string
}

type BreakStamptype={
    Break:"Break";
    startTime:string;
    endTime:string;
    duration:string;
}

const initTimeList:Array<TimeStampType>=storeTimeData? JSON.parse(storeTimeData): []
const initStampList:Array<BreakStamptype>=storeBreakData? JSON.parse(storeBreakData): []


function WorkTimeEntry() {
    const [showAddEntry, setShowAddEntry]=useState<boolean>(false)
    const [showAddBreaky, setShowAddBreak]=useState<boolean>(false)
    const [TimeStampList, setTimeStampList]=useState<Array<TimeStampType>>(initTimeList)
    const [breakStampList, setBreakStampList]=useState<Array<BreakStamptype>>(initStampList)
    const [isNotMidScreen]=useMediaQuery(`(min-width:1050px)`)



    const handleSubmit=(e:React.FormEvent<HTMLFormElement>, state:TimeStampType)=>{
        e.preventDefault()
        console.log("ok")
        let modefiedList=[...TimeStampList,state]
        localStorage.setItem("ListStamps", JSON.stringify(modefiedList))
        setTimeStampList(modefiedList)
    }
    const handleBreakSubmit=(e:React.FormEvent<HTMLFormElement>, state:BreakStamptype)=>{
        e.preventDefault()
        console.log("ok")
        let modefiedList=[...breakStampList,state]
        localStorage.setItem("BreakStamps", JSON.stringify(modefiedList))
        setBreakStampList(modefiedList)
    }
    

    const handleCancel=():void=>{
        setShowAddEntry(false)
        setShowAddBreak(false)
    }



  return (
    <Box border="1px solid gray"  m={isNotMidScreen?"10px 14rem": "10px 1rem"} borderRadius="5px">
        <Box p="15px 20px" >
            <Flex gap="20px" align="center">
            <Checkbox></Checkbox>
            <ButtonGroup gap="10px">
            <Button size="sm" onClick={()=>{!showAddBreaky && setShowAddEntry(true)}}>Add Time Entry</Button>
            <Button size="sm" onClick={()=>{!showAddEntry && setShowAddBreak(true)}}>Add Break</Button>
            </ButtonGroup>
            </Flex>
        </Box>
        <hr />
        {showAddEntry && <AddTimeEntry handleCancel={handleCancel} handleSubmit={handleSubmit}/>}
        {showAddBreaky && <AddBreak handleCancel={handleCancel} handleBreakSubmit={handleBreakSubmit}/>}
        <hr/>
        <TimeListing  TimeStampList={TimeStampList}/>
        <BreakListing breakStampList={breakStampList}/>
    </Box>
  )
}

export default WorkTimeEntry