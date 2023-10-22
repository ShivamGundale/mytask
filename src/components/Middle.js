import React from 'react'
import CustomizedProgressBars from './CustomizedProgressBars'
function Middle() {
  return (
    <div className='Middle'>
        <div className='box1'>
            <p>Key performance indicator</p>
            <div className='sub'>
            <div className='sub1'>
                <div><p>client retension rate</p></div>
                <div><h2>55%</h2></div>
            </div>
            <div className='sub1'>
                <div><p>client Satisfaction</p></div>
                <div><h2>55%</h2></div>
            </div>
            <div className='sub1'>
                <div><p>Revenue genrated</p></div>
                <div><h2>55%</h2></div>
            </div>
            </div>
        </div>

        <div className='box2'>
            <p>Companies status</p>
            <div className='sub'>
            <div className='sub1'>
                <div><p>Total</p></div>
                <div><h2>20</h2></div>
            </div>
            <div className='sub1'>
                <div><p>Active</p></div>
                <div><h2>15</h2></div>
            </div>
            <div className='sub1'>
                <div><p>New</p></div>
                <div><h2>3</h2></div>
            </div>
            </div>
        </div>

        <div className='box3'>
            <p>Active User base</p>
            <div className='sub'>
                
            <div className='sub1'>
                <div><p>89% App user</p></div>
            </div>
            <div className='sub1'>
                <div><p>11% web user</p></div>
            </div>
            </div>
            <div className='customize'>
            <CustomizedProgressBars value="89"/>
            <CustomizedProgressBars value ="11"/>
            </div>
        </div>
    </div>
  )
}

export default Middle