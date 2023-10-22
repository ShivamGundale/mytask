
import React from 'react'
import '../App.css'
import MultipleSelect from './MultipleSelect';
function Slidebar() {
  return (
    <div className='slidebar'>
        <div className='name'>
        <h2><span>TEXLA</span>CULTURE</h2>
        </div>
        <div className='slidebox'>
           <ul>
            <li className='row'> <MultipleSelect title="Dashboard"/></li>
            <a><li className='row'><MultipleSelect title = "Companies"/></li></a>
            <a><li className='row'><MultipleSelect title = "Support & Tickets"/></li></a>
            <a><li className='row'> <MultipleSelect title = "User Admins"/></li></a>
           </ul>
        </div>
    </div>
  )
}

export default Slidebar
