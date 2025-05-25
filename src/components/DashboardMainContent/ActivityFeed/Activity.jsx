import React from 'react'
import "../../../styles/Activity/Activity.css"
import {activityData} from "../../../data/ActivityData"
export const Activity = () => {
  return (
    <div className="activity_container">
       <div className='activity_top_contianer'>
          <h5 style={{color:"#051a78"}}>Activity</h5>
          <h6>3 appointment on this week</h6>
       </div>
       <div className='activity_middle_contianer'>
        {
          activityData.map((item)=>
          {
            return(
              <div className='activity_middle_contianer'>
               <div style={{backgroundColor:item.firstBar}} className='first_bar'></div>
                <div style={{backgroundColor:item.secondBar}} className='second_bar'></div>
                <div className='third_bar'>
                  <div style={{backgroundColor:item.thirdFirstBar}}className='third_bar_first'></div>
                  <div style={{backgroundColor:item.thirdSecondBar}} className='third_bar_second'></div>
                </div>
                <div style={{backgroundColor:item.fourthBar}} className='fourth_bar'></div>
                <div className='fifth_bar'>
                  <div style={{backgroundColor:item.fifthBarFirst}}className='fifth_bar_first'></div>
                  <div style={{backgroundColor:item.fifthBarSecond}} className='fifth_bar_second'></div>
                </div>
                <div style={{backgroundColor:item.sixthBar}} className='sixth_bar'></div>
                <div className='seventh_bar'>
                  <div style={{backgroundColor:item.seventhBarFirst}}className='seventh_bar_first'></div>
                  <div style={{backgroundColor:item.seventhBarSecond}} className='seventh_bar_second'></div>
                </div>
                <div style={{backgroundColor:item.eightBar}} className='eight_bar'></div>
              </div>
            )
          })
        }
       </div>
       <div className='activity_last_container'>
            <h6>Mon</h6>
            <h6>Tue</h6>
            <h6>Wed</h6>
            <h6>Thu</h6>
            <h6>Fri</h6>
            <h6>Sat</h6>
            <h6>Sun</h6>
        </div>
    </div>
  )
}
