import React from 'react'
import "../../styles/Sidebar/Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard,faHistory,faCalendar,faChartSimple,faExpandAlt,faPerson,faPhone,faGear } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div>
        <div class="container1">
        <div>
            <h4 class="general">General</h4>
            <h5 class="project" style={{color:"#051a78"}}><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faDashboard} /></span>Dashboard</h5>
            <h5 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faHistory} /></span>History</h5>
            <h5 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faCalendar} /></span>Calendar</h5>
            <h5 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faExpandAlt} /></span>Appointments</h5>
            <h5 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faChartSimple} /></span>Statistics</h5>
            <h5 class="general">Tools</h5>
            <h5 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faPerson} /></span>Chat</h5>
            <h5 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faPhone} /></span>Support</h5>
        </div>
        <div >
            <h5 style={{color:"grey"}} class="setting"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faGear} /></span>Settings</h5>
        </div>
        </div>
    </div>
  )
}

export default Sidebar