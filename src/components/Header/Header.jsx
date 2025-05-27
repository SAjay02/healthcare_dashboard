
import Profile from './Profile'
import Searchbar from './Searchbar'
import Title from './Title'
import '../../styles/Header/Header.css'
const Header = () => {
  return (
    <div className="header_container">
        <>
            <Title/>
            <Searchbar/>
            <Profile/>
        </>
    </div>
  )
}

export default Header