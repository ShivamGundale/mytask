import React from 'react'

function Progressbar() {
  return (
    <div className='bar'>
    <h5>Regional matrix</h5>
    <div className='progressbar'>
        <div className='barnames'>
            <div className='barname1'>East  </div><div className='round' id='round1'></div>
            <div className='barname1'>North </div><div className='round' id='round2'></div>
            <div className='barname1'>South </div><div className='round' id='round3'></div>
            <div className='barname1'>West </div><div className='round' id='round4'></div>
        </div>
        
        <div className='skill'>
            <div className='outer'>
                <div className='inner'></div>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px" className='check0'>
                <defs>
                    <linearGradient id='gradientColor'>
                        <stop offset="0%" stopColor='98GT99'/>
                        <stop offset="100%" stopColor='#9766DD'/>
                    </linearGradient>
                </defs>
                
                <circle cx="80" cy="80" r="70" strokeLinecap=''/>
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px" className='check1'>
                <defs>
                    <linearGradient id='gradientColor'>
                        <stop offset="0%" stopColor='#98GT99'/>
                        <stop offset="100%" stopColor='#9766DD'/>
                    </linearGradient>
                </defs>
                
                <circle cx="80" cy="80" r="70" strokeLinecap=''transform="rotate(90 80 80)" fill="url(#gradientColor)"/>
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px" className='check2'>
                <defs>
                    <linearGradient id='gradientColor'>
                        <stop offset="0%" stopColor='#98GT99'/>
                        <stop offset="100%" stopColor='#9766DD'/>
                    </linearGradient>
                </defs>
                
                <circle cx="80" cy="80" r="70" strokeLinecap=''transform="rotate(180 80 80)" />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="160px" height="160px" className='check3'>
                <defs>
                    <linearGradient id='gradientColor'>
                        <stop offset="0%" stopColor='#98GT99'/>
                        <stop offset="100%" stopColor='#9766DD'/>
                    </linearGradient>
                </defs>
                
                <circle cx="80" cy="80" r="70" strokeLinecap=''transform="rotate(270 80 80)" />
            </svg>
        </div>
        <div className='inr'>
        <div className='rupee' id='rupee1'><p><span>5 Client</span> <br/> INR 100000</p></div>
        <div className='rupee' id='rupee2'><p><span>6 Client</span> <br/> INR 125000</p></div>
        <div className='rupee' id='rupee3'><p><span>20 Client</span> <br/> INR 500000</p></div>
        <div className='rupee' id='rupee4'><p><span>1 Client</span> <br/> INR 2000</p></div>
        </div>
    </div>
    
    </div>
  )
}

export default Progressbar