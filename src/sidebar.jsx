import React from 'react'
import './Sidebar.css'
import SidebarRow from './sidebarRow'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import  OndemandVideoIcon  from '@mui/icons-material/OndemandVideo'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUPAltOutlinedIcon from '@mui/icons-material/ThumbUpAlt'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { Link} from 'react-router-dom';


function sidebar() {
  return (
    <div className='sidebar'>


    <SidebarRow   selected Icon={HomeIcon} title = "Home"
        />
        {/* <Link to={`/`}>
       onClick={}   <HomeIcon  className='srch'  />
        </Link>/ */}
    <SidebarRow  Icon={WhatshotIcon}title = "Trending"/>
    <SidebarRow Icon={SubscriptionIcon} title = "Subscription"/>
    <hr />
    <SidebarRow  Icon={VideoLibraryIcon} title = "Library"/>
    <SidebarRow  Icon={HistoryIcon} title = "History"/>
    <SidebarRow  Icon={OndemandVideoIcon} title = "Your Videos"/>
    <SidebarRow  Icon={WatchLaterIcon} title = "Watch Later"/>
    <SidebarRow  Icon={ThumbUPAltOutlinedIcon} title = "Liked Videos"/>
    <SidebarRow  Icon={ExpandMoreOutlinedIcon} title = "Show more"/>
    <hr />

    </div>
  )
}

export default sidebar