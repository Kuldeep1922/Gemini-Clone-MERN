import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useContext } from 'react'
import { Context } from '../../context/Context'
const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts,setPrevPrompts} = useContext(Context)
    return (
        <div className='sidebar'>
            <div className="top">
                <img className='menu' src={assets.menu_icon} onClick={() => setExtended(!extended)} />
                <div className="new-chat">
                    <img className='menu' src={assets.plus_icon} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                <div className="recent">
                    {
                        extended ?
                            <p className='recent-title recent entry'>Recent</p> : ""
                    }
                    {
                        
                    }
                    <div className={`recent-entry  ${extended ? 'extended' : ''}`}>
                        <img className='' src={assets.message_icon} />
                        <p>What is React...</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className={`bottom-item recent-entry  ${extended ? 'extended' : ''}`} >
                    <img className=' ' src={assets.question_icon} />
                    <p>Help</p>
                </div>
                <div className={`bottom-item recent-entry  ${extended ? 'extended' : ''}`} >
                    <img className=' ' src={assets.history_icon} />
                    <p>Activity</p>
                </div>
                <div className={`bottom-item recent-entry ${extended ? 'extended' : ''}`}>
                    <img className='' src={assets.setting_icon} />
                    <p>Settings</p>
                </div>

            </div>
        </div>
    )
}

export default Sidebar