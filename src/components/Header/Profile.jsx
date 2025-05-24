import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faUser } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Header/Profile.css'

const Profile = () => {
  return (
    <div className='profile_container'>
        <div className='profile'>
            <FontAwesomeIcon icon={faUser} style={{color:"white"}}/>
        </div>
        <div className='addprofile'>
            <FontAwesomeIcon icon={faPlus} style={{color:"white"}}/>
        </div>
    </div>
  )
}

export default Profile