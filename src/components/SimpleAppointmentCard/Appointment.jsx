import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/Appointment/Appointment.css"

const Appointment = ({appointmentData=[{}]}) => {
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
                                <FontAwesomeIcon className='tooth_icon' style={{color:item.icon_color}} icon={item.name} />
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