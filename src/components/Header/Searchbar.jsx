import '../../styles/Header/Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Searchbar = () => {
  return (
    <>
        <div className='searchbar_container'>
            <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} style={{color:"#051a78"}}/>
            <p className='searchbar_content'>Search</p>
        </div>
        <div className='remainder_container'> 
            <FontAwesomeIcon className='remainder_icon' icon={faBell} style={{color:"#051a78"}}/>
        </div>
    </>
  )
}

export default Searchbar