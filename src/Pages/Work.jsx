import React from 'react';
import { BiCalendar } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import styles from '../Styles/Work.module.css'

const Mywork = () => {
  return (
    <div>
        
        <h1 style={{fontWeight:"bold", marginLeft:"45px"}} >Mywork</h1>
        {/* <BiCalendar />
        <BiNotepad />
        <BiTimeFive /> */}
        {/* Top card */}
        <div className={styles.tasktopcard}>

            <div className={styles.topchild1}>

             <div className={styles.topheading}>
              <h3 style={{fontWeight:"600"}}>Current task</h3>
              <p>You can start tracking your time by clicking the green button.</p>
             </div>
             <div className={styles.starticon}>
                  <IoCaretForwardCircleSharp />
             </div>
              </div>

          <div className={styles.topchild2cover}>
            <div className={styles.topchild2}>
                <div className={styles.topheading}>
                    <h1 style={{fontWeight:"600"}}>Overview</h1>
                     <p>We analyzed the data based on your tracked time.</p>
                </div>
                <div className={styles.timeicon}>
                  <BiTimeFive />
                </div>
            </div>
               {/* 2nd flex div  */}
               <div className={styles.secflexdiv}>
                 <div className={styles.gridtoptasksec}>
                  <p style={{color:"grey", fontStyle:"italic"}}>Today</p>
                  <p>-</p>
                 </div>
                 <div className={styles.gridtoptasksec}>
                  <p style={{color:"grey", fontStyle:"italic"}}>This Week</p>
                  <p>1 h 00 min</p>
                 </div>
                 <div className={styles.gridtoptasksec}>
                  <p style={{color:"grey", fontStyle:"italic"}}>This Month</p>
                  <p>1 h 00 min</p>
                  </div>
                 <div className={styles.gridtoptasksec}>
                 <p style={{color:"grey", fontStyle:"italic"}}>Monthly Balance</p> 
                 <p>-7h 00 min</p>
                 </div>
               </div>
          </div>

        </div>
        {/* below card */}
        <div className='taskdowncard'>

            <div className='downchild1'>

            </div>
            <div className='downchild1'>
                
            </div>

        </div>
    </div>
  )
}

export default Mywork