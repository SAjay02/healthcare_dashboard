import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLungs } from '@fortawesome/free-solid-svg-icons'
import {healthData} from "../../../data/HealthStatusData"
const HealthStatus = () => {
  return (
    <>
    <div className='health_container'>
    {
        healthData.map((item)=>
        {
            return(
                <div className='single_healthstatus'>
                    <div className='health_top_container'>
                        <FontAwesomeIcon className='health_icon' icon={item.part} />
                        <h6 className='health_name'>{item.name}</h6>
                    </div>
                    <div className='health_middle_container'>
                        <h6 style={{textAlign:"center"}}>{item.Date}</h6>
                    </div>
                    <div className='health_last_container'>
                        <div style={{backgroundColor:item.status}} className='health_show'></div>
                        <div className='health_notshow'></div>
                    </div>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default HealthStatus