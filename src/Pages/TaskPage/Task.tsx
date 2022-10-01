import { Button } from "@chakra-ui/react";
import React from "react";
import TaskFilterNav from "./TaskFilterNav";
import TaskMain from "./TaskMain";
import {useState} from'react'
import TaskNav from "./TaskNav";
import styles from "./Task.module.css";
import EmptyTask from "./emptyTask";
function Task() {
    const [add,setAdd]=useState(false)
  return (
    <div className={styles.taskCont}>
        <br />
      <TaskNav />
      <TaskFilterNav />
      <TaskMain add={add} setAdd={setAdd} />
    </div>
  );
}

export default Task;
