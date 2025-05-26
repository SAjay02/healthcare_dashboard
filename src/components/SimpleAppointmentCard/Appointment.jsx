import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import "../../styles/Appointment/Appointment.css"
import { appointmentData} from "../../data/Appointment"

const Appointment = () => {
  return (
    <div className='appointment_container'>
        {
            appointmentData.map((item)=>
            {
                return(
                    <>
                        <div className='dentist_container' style={{backgroundColor:item.bg_color,color:item.color}}>
                            <div className='dentist_top_container'>
                                <h6>{item.purpose}</h6>
                                <FontAwesomeIcon className='tooth_icon' style={{color:"white"}} icon={item.name} />
                            </div>
                            <span className='appointment_date'>{item.time}</span>
                            <span >{item.doctor}</span>
                        </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Appointment