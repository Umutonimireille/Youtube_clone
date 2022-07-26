import React from 'react'
import './VideoRow.css'

function videoRow({views,subs,description,timestamp,channel,title,image}) {
  return (
    <div className='videoRow'>
        <img  src = {image}/>
        <div className="videoRow_text">
            <h3>{title}</h3>
            {/* <span className="videoRow_subs"> */}
            <p className='videoRow_headline'>{channel} . <span className='videoRow_subsNumber'>{subs}</span> Subscriber {views} Views .{timestamp} timestamp  </p>
            <p className='videoRow_description'>{description}</p>

        </div>

    </div>
  )
}

export default videoRow