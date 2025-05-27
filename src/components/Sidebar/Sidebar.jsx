import React, { useState } from 'react'
import "../../styles/Sidebar/Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDashboard, faHistory, faCalendar,
  faChartSimple, faExpandAlt, faPhone,
  faGear, faComment, faBars
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>

      <div className="sidebar_toggle" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      <div className={`container1 ${open ? 'open' : ''}`}>
        <div>
          <h4 className="general">General</h4>
          <h5 className="project" style={{ color: "#051a78" }}>
            <span className="project_icon"><FontAwesomeIcon icon={faDashboard} /></span>Dashboard
          </h5>
          <h5 className="project"><span className="project_icon"><FontAwesomeIcon icon={faHistory} /></span>History</h5>
          <h5 className="project"><span className="project_icon"><FontAwesomeIcon icon={faCalendar} /></span>Calendar</h5>
          <h5 className="project"><span className="project_icon"><FontAwesomeIcon icon={faExpandAlt} /></span>Appointments</h5>
          <h5 className="project"><span className="project_icon"><FontAwesomeIcon icon={faChartSimple} /></span>Statistics</h5>
          <h5 className="general">Tools</h5>
          <h5 className="project"><span className="project_icon"><FontAwesomeIcon icon={faComment} /></span>Chat</h5>
          <h5 className="project"><span className="project_icon"><FontAwesomeIcon icon={faPhone} /></span>Support</h5>
        </div>
        <div>
          <h5 className="setting"><span className="project_icon"><FontAwesomeIcon icon={faGear} /></span>Settings</h5>
        </div>
      </div>
    </>
  )
}

export default Sidebar
