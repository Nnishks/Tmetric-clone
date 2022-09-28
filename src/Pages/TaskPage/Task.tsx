import { Button } from '@chakra-ui/react';
import React from 'react';
import TaskFilterNav from './TaskFilterNav';
import TaskMain from './TaskMain';

import TaskNav from './TaskNav';
import styles from "./Task.module.css"
function Task() {
    return (
        <div  className={styles.taskCont}>
        <TaskNav/>
    <TaskFilterNav/>
    <TaskMain/>
        </div>
    );
}

export default Task;