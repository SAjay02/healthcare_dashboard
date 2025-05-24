import React from 'react'
import "../../styles/Sidebar/Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard,faHistory,faCalendar,faSatelliteDish,faExpandAlt,faPerson,faPhone } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    // <div>
        <div class="container1">
        <div>
            <h4 class="general">General</h4>
            <h6 class="project" style={{color:"#051a78"}}><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faDashboard} /></span>Dashboard</h6>
            <h6 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faHistory} /></span>History</h6>
            <h6 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faCalendar} /></span>Calendar</h6>
            <h6 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faExpandAlt} /></span>Appointments</h6>
            <h6 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faSatelliteDish} /></span>Statistics</h6>
        {/* </div>
        <div> */}
            <h4 class="general">Tools</h4>
            <h6 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faPerson} /></span>Chat</h6>
            <h6 style={{color:"grey"}} class="project"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faPhone} /></span>Support</h6>
        </div>
        <div >
            <h6 style={{color:"grey"}} class="support"><span class="project_icon"><FontAwesomeIcon className='search_icon' icon={faPhone} /></span>Settings</h6>
        </div>
    </div>
    // </div>
  )
}

export default Sidebar