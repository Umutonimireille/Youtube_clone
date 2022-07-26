import React from 'react'
import Sidebar from './sidebar'
import Recommended from './recommended'
import './Both.css';

function both() {
  return (
    <div className='div'>
        <Sidebar />
           <Recommended />
      
    </div>
  )
}

export default both