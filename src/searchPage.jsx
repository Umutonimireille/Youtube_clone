import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './channelRow'
import VideoRow from './videoRow';
// import TuneOutlinedIcon from '@mui/material/ TuneOutlined'


function searchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage_filter">
            <TuneIcon />
            <h2>Filter</h2>

        </div>
        <hr />
        <ChannelRow 
        image = "https://yt3.ggpht.com/ytc/AKedOLSsLiJSfWIP2jpKqJ6EydIszI96HteOnMmsA2aUWw=s88-c-k-c0x00ffffff-no-rj"
        Channel = "Alex Rivera"
        verified
        subs= "8.99M"
        noOfVideos = {500}
        description = "Alway New Videos"
         />
         <hr />
         <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />
          <VideoRow 
         views = "20M views"
         subs= "8.99M"
         description="Always New Videos"
         timestamp="Dec 27, 2018"
         channel="Alex Rivera"
         title= "Testing my boyfreinds"
         image="https://i.ytimg.com/vi/1pPKd8eOaLo/maxresdefault.jpg"
         />

    </div>
  )
}

export default searchPage;