import React from 'react'
import "../../../styles/Schedule/Schedule.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {scheduledData,scheduledData2} from "../../../data/Schedule"
const Schedule = () => {
  return (
    <div>
        <span className='schedule_title'>The Upcoming Schedule</span>
        <h6 className='schedule_day'>On Thursday</h6>
        <div className='schedule_container'>
        {
            scheduledData.map((item)=>
            {
                return(
                    <>
                        <div className='schedule_content' style={{backgroundColor:"#e0dcfa",color:"#051a78"}}>
                            <div className='schedule_top_container'>
                                <h6>{item.purpose}</h6>
                                <FontAwesomeIcon className='tooth_icon' style={{color:"black"}} icon={item.name} />
                            </div>
                            <span className='appointment_time'>{item.time}</span>
                        </div>
                    </>
                )
            })
        }
    </div>
    <h6 className='schedule_day'>On Saturday</h6>
    <div className='schedule_container'>
    {
            scheduledData2.map((item)=>
            {
                return(
                    <>
                        <div className='schedule_content' style={{backgroundColor:"#e0dcfa",color:"#051a78"}}>
                            <div className='schedule_top_container'>
                                <h6>{item.purpose}</h6>
                                <FontAwesomeIcon className='tooth_icon' style={{color:"black"}} icon={item.name} />
                            </div>
                            <span className='appointment_time'>{item.time}</span>
                        </div>
                    </>
                )
            })
        }
        </div>
    </div>
  )
}

export default Schedule