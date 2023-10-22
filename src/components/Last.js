
import React from 'react'
import SelectAutoWidth from './SelectAutoWidth'
import StickyHeadTable from './StickyHeadTable'

function Last() {
  return (
    <div className='Last'>
        <h5>onboarded companies</h5><hr/>
        <div className='searcher'>
        <SelectAutoWidth/>
        <input className='input' type="text" placeholder="Search client or invoice number"/>
        </div>
        <StickyHeadTable/>
    </div>
  )
}

export default Last