import { Box, Button, ButtonGroup, Checkbox, Flex } from '@chakra-ui/react'
import React,{useState} from 'react'
import AddBreak from './AddBreak'
import AddTimeEntry from './AddTimeEntry'
import BreakListing from './BreakListing'
import TimeListing from './TimeListing'



const storeData=localStorage.getItem("ListStamps")

type TimeStampType={
    description?: string;
    startTime:string;
    endTime:string;
    duration: string
    project?: string;
    tag?:string
}
const initList:Array<TimeStampType>=storeData? JSON.parse(storeData): []

function WorkTimeEntry() {
    const [showAddEntry, setShowAddEntry]=useState<boolean>(false)
    const [showAddBreaky, setShowAddBreak]=useState<boolean>(false)
    const [TimeStampList, setTimeStampList]=useState<Array<TimeStampType>>(initList)

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>, state:TimeStampType)=>{
        e.preventDefault()
        console.log("ok")
        let modefiedList=[...TimeStampList,state]
        localStorage.setItem("ListStamps", JSON.stringify(modefiedList))
        setTimeStampList(modefiedList)
    }
    

    const handleCancel=():void=>{
        setShowAddEntry(false)
        setShowAddBreak(false)
    }



  return (
    <Box border="1px solid gray"  m="10px 14rem" borderRadius="5px">
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
        {showAddBreaky && <AddBreak handleCancel={handleCancel} />}
        <hr/>
        <TimeListing  TimeStampList={TimeStampList}/>
        <BreakListing/>
    </Box>
  )
}

export default WorkTimeEntry