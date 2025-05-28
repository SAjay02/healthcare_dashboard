import anatomy from "../../../assests/Anatomy.png"
import "../../../styles/Dashboard/Dashboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faGavel } from '@fortawesome/free-solid-svg-icons'
const AnatomySection = () => {
  return (
    <>
      <div className='anatomy_container'>
          <img className='anatomy_image' src={anatomy}/>
      </div>
      <div className="heart_container">
        <FontAwesomeIcon style={{color:"red",marginRight:"5px"}} className='' icon={faHeart} />
        <h6>Healthy Heart</h6>
      </div>
      <div className="leg_container">
        <FontAwesomeIcon style={{color:"lightgreen",marginRight:"5px"}} className='' icon={faGavel} />
        <h6>Healthy Leg</h6>
      </div>
      </>
  )
}

export default AnatomySection