import React from 'react';
import { BiCalendar } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import styles from '../Styles/Work.module.css';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';

const Mywork = () => {
  return (
    <div>
      <SideBar />
      <div className={styles.pagetaskheading}>
        <div style={{display:"flex"}}>
        {/* <RiMenu2Line className={styles.listtaskh}/> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <h1 className={styles.pthu2} >My Work</h1>
        </div>
        <div>
          <button className={styles.tasksidebtn}>Manage Widgets</button>
        </div>
         
      </div>
        {/* <BiCalendar />
        <BiNotepad />
        <BiTimeFive /> */}
        {/* Top card */}
        <div  className={styles.taskmaindiv} >
        <div className={styles.tasktopcard}>

            <div className={styles.topchild1}>

             <div className={styles.topheading}>
              <h3 style={{fontWeight:"600"}}>Current task</h3>
              <p style={{paddingTop:"7px",color:"rgb(120, 118, 118)",fontStyle: "italic",
                 fontSize: "16px", letterSpacing:".2px", wordSpacing:".5px"}}>You can start tracking your time by clicking the green button.</p>
             </div>
             <div className={styles.starticon}>
                  <IoCaretForwardCircleSharp />
             </div>
              </div>

          <div className={styles.topchild2cover}>
            <div className={styles.topchild2}>
                <div className={styles.topheading}>
                    <h1 style={{fontWeight:"600"}}>Overview</h1>
                     <p style={{paddingTop:"7px",color:"rgb(120, 118, 118)",fontStyle: "italic",
                 fontSize: "16px"}}>We analyzed the data based on your tracked time.</p>
                </div>
                <div className={styles.timeicon}>
                  <BiTimeFive />
                </div>
            </div>
               {/* 2nd flex div  */}
               <div className={styles.secflexdiv}>
                 <div className={styles.gridtoptasksec}>
                  <p style={{color:"grey", fontStyle:"italic"}}>Today</p>
                  <p style={{color:"black", fontSize:"20px", marginTop:"7px",
                   paddingLeft:"10px"}}
                  >-</p>
                 </div>
                 <div className={styles.gridtoptasksec}>
                  <p style={{color:"grey", fontStyle:"italic"}}>This Week</p>
                  <p style={{color:"rgb(9, 9, 174)", fontSize:"20px", marginTop:"7px"}}
                  >1 h 00 min</p>
                 </div>
                 <div className={styles.gridtoptasksec}>
                  <p style={{color:"grey", fontStyle:"italic"}}>This Month</p>
                  <p style={{color:"rgb(9, 9, 174)", fontSize:"20px", marginTop:"7px"}}>1 h 00 min</p>
                  </div>
                 <div className={styles.gridtoptasksec}>
                 <p style={{color:"grey", fontStyle:"italic"}}>Monthly Balance</p> 
                 <p style={{color:"black", fontSize:"20px", marginTop:"7px"}}>-7h 00 min</p>
                 </div>
               </div>
          </div>

        </div>
        {/* below card */}
        <div className={styles.taskdowncard}>

            <div className={styles.downchild1}>
              <div className={styles.deep1top}>
              <h3 style={{fontWeight:"600"}}>Calendar Events</h3>
              <BiCalendar className={styles.taskcaleicon}/>
              </div>
              
              <div style={{paddingTop:"7px",color:"rgb(120, 118, 118)",fontStyle: "italic",
                 fontSize: "16px"}}>
                
               <Link to=""><span style={{color:"rgb(9, 9, 174)"}}>&nbsp;&nbsp;Connect&nbsp;</span></Link>
                <span>a calendar to track your events.</span>

              </div>

            </div>
            <div className={styles.downchild1}>
              <div className={styles.deep1top} >
                  <h3 style={{fontWeight:"600"}}>Due Tasks</h3>
                  <BiNotepad  className={styles.tasktodoicon}/>
              </div>
              <div style={{paddingTop:"7px",color:"rgb(120, 118, 118)",fontStyle: "italic",
                 fontSize: "16px"}}>
              <Link to=""><span style={{color:"rgb(9, 9, 174)"}}>&nbsp;&nbsp;Create &nbsp;</span></Link> 
                <span>a task and set due date.</span>
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Mywork