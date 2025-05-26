import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../../../styles/Calendar/Calendar.css"
import { calendarData } from '../../../data/Calendar'
import Appointment from '../../SimpleAppointmentCard/Appointment'
import Schedule from '../UpcomingSchedule/Schedule'

const Calendar = () => {
  return (
    <div className="calendar_container">
        <div className="calendar_top_container">
            <h5 style={{color:"#051a78"}}>October 2021</h5>
            <div>
                <FontAwesomeIcon className='arrow_icon_left' icon={faArrowLeft} style={{color:"#051a78"}}/>
                <FontAwesomeIcon className='arrow_icon_right' icon={faArrowRight} style={{color:"#051a78"}}/>
            </div>
        </div>
        <div className='day_container'>
            {
                calendarData.map((item)=>
                {
                    return(
                        <div className='day_table_container'>                        
                            <h6 style={{color:"gray"}}>{item.day}</h6>
                            <h4 style={{color:"#051a78"}} className='date_container'>{item.date}</h4>
                            <h6 style={{color:"gray"}} className='time_container'>{item.time1}</h6>
                            {
                                item.booked && item.booked==="on" ? 
                                <h6 style={{color:"white",backgroundColor:"#271db5",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px"}} className='time_container'>{item.time2}</h6> :
                                <h6 className='time_container'>{item.time2}</h6>

                            }
                            {/* <h6 style={{color:"gray"}} className='time_container'>{item.time2}</h6> */}
                            <h6 style={{color:"gray"}} className='time_container'>{item.time3}</h6>
                        </div>
                    )
                })
            }
            
        </div>
        <Appointment/>
        <Schedule/>
    </div>
  )
}

export default Calendar