import React from "react";
import styles from "./Task.module.css";
import { Text } from "@chakra-ui/react";
function EmptyTask() {
  return (
    <div className={styles.emptyTask}>
      <img src="https://app.tmetric.com/images/empty_table.svg" alt="" /> <br />
      <Text
        fontSize={{
          base: "15",
          sm: "20px",
          md: "30px",
          lg: "40px",
          xl: "40px",
        }}
      >
        Nothing matches your filter.
      </Text>
      <br />
      <Text
        fontSize={{
          base: "10",
          sm: "10px",
          md: "15px",
          lg: "20px",
          xl: "20px",
        }}
      >
        Try different filter settings.
      </Text>
    </div>
  );
}

export default EmptyTask;
