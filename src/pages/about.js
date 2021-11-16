import React from 'react'
import './about.css'
import Profile from '../images/profile.jpg'
import Military from '../images/military.jpg'
function about() {
return (
    <div id='about'>
        <div className='left'>
            <div className='rowLeft'>
                    <div className='item'>
                        <div className='profile' style={{backgroundImage: "url(" + Profile + ")"}}/>
                    </div>
                    <div className='textLeft'>
                        <h1>Software Developer</h1>
                        <p>Hello hi Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello Hello</p>
                    </div>
            </div>
            <div className='rowLeft'>
                    <div className='item'>
                        <div className='profile' style={{backgroundImage: "url(" + Profile + ")"}}/>
                    </div>
                    <div className='textLeft'>
                        <h1>Software Developer</h1>
                        <p>Hello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello Hello</p>
                    </div>
            </div>
        </div>
            
        <div className='columnBreak'/>
        <div className='right'>
            <div className='rowRight'>
                <div className='item'>
                    <div className='profile' style={{backgroundImage: "url(" + Military + ")"}}/>
                </div>
                <div className='textRight'>
                    <h1>Excellence</h1>
                    <p>Hello Hello Hello Hello Hello Hello HelloHello Hello Hello Hello Hello Hello Hello</p>
                </div>
            </div>
            <div className='rowRight'>
                <div className='item'>
                    <div className='profile' style={{backgroundImage: "url(" + Profile + ")"}}/>
                </div>
                <div className='textRight'>
                    <h1>Excellence</h1>
                    <p>Wassup Wassup Wassup Wassup Wassup Wassup Wassup Wassup Wassup Wassup </p>
                </div>
            </div>
            
            
        </div>
    </div>
    )
}

export default about
