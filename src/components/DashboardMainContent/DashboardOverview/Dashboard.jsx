import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "../../../styles/Dashboard/Dashboard.css"
import AnatomySection from './AnatomySection'
import HealthStatus from './HealthStatus'
import { Activity } from '../ActivityFeed/Activity'
import {activityData} from "../../../data/ActivityData"
import {healthData} from "../../../data/HealthStatusData"
const Dashboard = () => {
  return (
    <div className="dashboard_container">
        <div className='dashboard_top_cont' style={{color:"#051a78"}}>
            <h4 >Dashboard</h4>
            <p >This week<span><FontAwesomeIcon className='search_icon' icon={faArrowDown} /></span></p>
        </div>
        <div className='dashboard_middle'>
            <div className='anatomy_container_col'><AnatomySection/></div>
            <div className='health_container_col'><HealthStatus healthData={healthData}/></div>
        </div>
        <div>
          <Activity activityData={activityData}/>
        </div>
    </div>
  )
}

export default Dashboard