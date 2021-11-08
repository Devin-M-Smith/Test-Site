import React from 'react'
import './home.css'
import Profile from '../images/profile.jpg'
import Military from '../images/military.jpg'
function home() {
return (
        <div className='home'>
            <div className='content'>
                <div className='left'>
                    <div className='profile' style={{backgroundImage: "url(" + Profile + ")"}}/>
                    <div className='caption'>
                        <h2>
                            Software
                        </h2>
                        <p>stack applications!</p>
                    </div>
                    <div className='break'/>
                    <div className='profile' style={{backgroundImage: "url(" + Profile + ")"}}/>
                    <div className='caption'>
                        <h2>
                            Software
                        </h2>
                        <p>stack applications!</p>
                    </div>
                </div>
                <div className='breakMobile'/>
                <div className='right'>
                    <div className='profile' style={{backgroundImage: "url(" + Military + ")"}}/>
                    <div className='caption'>
                        <h2>Hello</h2>
                        <p>Testing a whole bumch of bs</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default home
