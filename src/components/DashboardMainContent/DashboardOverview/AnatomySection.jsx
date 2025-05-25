import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import anatomy from "../../../assests/Anatomy.png"
const AnatomySection = () => {
  return (
    <div className='anatomy_container'>
        <img className='anatomy_image' src={anatomy}/>
    </div>
  )
}

export default AnatomySection