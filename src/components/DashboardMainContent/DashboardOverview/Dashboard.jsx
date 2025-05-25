import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "../../../styles/Dashboard/Dashboard.css"
import anatomy from "../../../assests/Anatomy.png"
import AnatomySection from './AnatomySection'
import HealthStatus from './HealthStatus'
const Dashboard = () => {
  return (
    <div className="dashboard_container">
        <div className='dashboard_top_cont' style={{color:"#051a78"}}>
            <h4 >Dashboard</h4>
            <p style={{fontSize:"small"}}>This week<span><FontAwesomeIcon className='search_icon' icon={faArrowDown} /></span></p>
        </div>
        <div className='dashboard_middle'>
            <AnatomySection/>
            <HealthStatus/>
        </div>
    </div>
  )
}

export default Dashboard