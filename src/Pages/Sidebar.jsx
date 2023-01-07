import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/Sidebar.module.css";
import { BiTask } from "react-icons/bi";
import { Box, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { signOutAction } from "../ReduxComponents/User/user.action";

import { Link,useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const SideBar = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const userName = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const [barToggle, setBarToggle] = useState(true);
  const [time, setTime] = useState(true);
  const [task, setTask] = useState(false);
  const [work, setwork] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const decode = jwtDecode(userName);
  console.log("decode", decode.email);

  useEffect(() => {
    if (barToggle) {
      addBodyPadding();
    } else {
      removeBodyPadding();
    }

    return removeBodyPadding;
  }, [barToggle]);
  function addBodyPadding() {
    document.body.style.paddingLeft =
      sidebarRef.current.getBoundingClientRect().width + "px";
  }
  function removeBodyPadding() {
    document.body.style.paddingLeft = "0";
  }
  const sBar = (n) => {
    if (n === "task") {
      setTask(true);
      setTime(false);
      setwork(false);
    } else if (n === "time") {
      setTask(false);
      setTime(true);
      setwork(false);
    } else if (n === "My work") {
      setTask(false);
      setTime(false);
      setwork(true);
    }
  };

  const handleLogOut = () => {
    console.log("logout function");
    dispatch(signOutAction());
    navigate("/");
  };

  return (
    <>
      <button
        onClick={() => {
          setBarToggle(!barToggle);
        }}
        className={styles.toggler}
      >
        {barToggle ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.74609 8L9.74609 13L11 11.7539L7.24609 8L11 4.24609L9.74609 3L4.74609 8Z"
              fill="%2334393D"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3H15V5H1V3ZM9 7H1V9H9V7ZM15 11H1V13H15V11Z"
              fill="%2334393D"
            />
          </svg>
        )}
      </button>

      <div
        ref={sidebarRef}
        className={styles.sidebar}
        style={{
          left: barToggle ? 0 : "-240px",
        }}
      >
        <div>
          <img
            style={{
              height: "40px",
              marginTop: "10px",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
            src="https://app.tmetric.com/images/tmetric_logo_and_text.svg"
            alt=""
          ></img>

          <div>
            <div
              className={time ? styles.selecteddiv : styles.normaldiv}
              onClick={() => sBar("time")}
            >
              <img
                style={{ height: "25px" }}
                alt=""
                src={
                  time
                    ? "https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"
                    : "https://tmetric.com/media/qojb5snq/icon-timer-gray.svg"
                }
              />

              <Link to="/Time">
                <span>Time</span>
              </Link>
            </div>
            <div
              className={task ? styles.selecteddiv : styles.normaldiv}
              onClick={() => sBar("task")}
            >
              <BiTask style={{ fontSize: "25px" }} />

              <Link to="/task">
                <span>Task</span>
              </Link>
            </div>
            <hr></hr>
            <div
              className={work ? styles.selecteddiv : styles.normaldiv}
              onClick={() => sBar("My work")}
            >
              <BiTask style={{ fontSize: "25px" }} />

              <Link to="/work">
                <span>My work</span>
              </Link>
            </div>
            <hr></hr>
          </div>
        </div>
        <div>
          <Flex
            borderRadius="6px"
            backgroundColor="#f6f7f8"
            width="fit-content"
            // _hover={{ backgroundColor: "#e2e6eb" }}
            transition=".2s"
            position="relative"
            marginLeft="3"
            marginRight="1"
            onClick={() => setIsOpen(!isOpen)}
            cursor="pointer"
          >
            <Box padding="3">
              <Img
                src="https://i1.wp.com/services.tmetric.com/storage/Content/Avatars/user-v2.png?ssl=1"
                borderRadius="50%"
                width="30px"
                height="30px"
              />
            </Box>
            <Box
              lineHeight=".6"
              padding="3"
              letterSpacing="wide"
              marginRight="8"
            >
              <Text
                fontSize="12px"
                color="#777e85"
                fontWeight="medium"
                zIndex="1"
              >
                My Company
              </Text>
              <br />
              <Text fontSize="14px" fontWeight="bold" color="#34393d">
                {decode.email}
              </Text>
            </Box>
            <Icon
              as={BsChevronRight}
              fontWeight="bold"
              marginLeft="4"
              m="auto"
              position="relative"
            />
            <Flex
              direction="column"
              lineHeight="9"
              boxShadow=" rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
              borderRadius="6"
              padding="4"
              display={isOpen ? "block" : "none"}
              position="absolute"
              top="auto"
              bottom="10px"
              right="0"
              transform="translate(100%, 0)"
              backgroundColor="white"
              transition=".4s"
            >
              <Box
                cursor="pointer"
                _hover={{ backgroundColor: "#e2e6eb" }}
                borderRadius="4"
              >
                <Text>My Profile</Text>
              </Box>
              <hr />
              <Text fontSize="12px">WORKSSPACES</Text>
              <Box
                cursor="pointer"
                _hover={{ backgroundColor: "#e2e6eb" }}
                borderRadius="4"
              >
                <Text>My Company</Text>
              </Box>
              <hr />
              <Box
                cursor="pointer"
                _hover={{ backgroundColor: "#e2e6eb" }}
                borderRadius="4"
              >
                <Text>Manage Workspaces</Text>
              </Box>
              <hr />
              <Flex
                _hover={{ backgroundColor: "#e2e6eb" }}
                onClick={handleLogOut}
                borderRadius="4"
              >
                <Text marginRight="16">Log Out</Text>
                <Icon as={FiLogOut} marginTop="3" />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SideBar;
