import { Button } from "@chakra-ui/react";
import React from "react";
import TaskFilterNav from "./TaskFilterNav";
import TaskMain from "./TaskMain";

import TaskNav from "./TaskNav";
import styles from "./Task.module.css";
import EmptyTask from "./emptyTask";
function Task() {
  return (
    <div className={styles.taskCont}>
        <br />
      <TaskNav />
      <TaskFilterNav />
      <TaskMain />
    </div>
  );
}

export default Task;
