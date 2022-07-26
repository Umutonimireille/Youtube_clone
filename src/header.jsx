import React ,{ useState}from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar  from '@mui/material/Avatar';
import { Menu } from '@mui/material';
import { Link} from 'react-router-dom';

function Header() {
  const [inputSearch ,setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
      <MenuIcon/>
      <Link  to = "/">
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png'></img>
        </Link>
      </div>
      <div className="header_input">
      <input value = {inputSearch}  onChange = {e => setInputSearch(e.target.value)}type = "text" placeholder='Search'/>
       <Link to={`/search/${inputSearch}`}>
       <SearchIcon className='srch'  />
       </Link>
       
      </div>
       <div className="header_icons">
       <VideoCallIcon  className='header_icon'/>
        <AppsIcon  className='header_icon'/>
        <NotificationsIcon  className='header_icon' />
        <Avatar 
        alt='mireille ' src='https://avatars.githubusercontent.com/Umutonimireille' />
       </div>
     
        </div>
    
  )
}

export default Header