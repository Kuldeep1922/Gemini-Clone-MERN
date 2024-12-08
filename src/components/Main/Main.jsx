import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
const questions = [
    { text: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon },
    { text: "What are the best books to read for personal growth?", icon: assets.code_icon },
    { text: "What are some healthy meal ideas for busy weekdays?", icon: assets.message_icon },
    { text: "How to prepare for a coding interview effectively?", icon: assets.bulb_icon },
];
const Main = () => {

    const { prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img className='menu' src={assets.user_icon} />
            </div>
            <div className="main-container">
                {
                    !showResult ? <>
                        <div className="greet">
                            <p>
                                <span>Hello,Dev</span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            {questions.map((question, index) => (
                                <div className="card" key={index}>
                                    <p>{question.text}</p>
                                    <img src={question.icon} alt="icon" />
                                </div>
                            ))}
                        </div>

                    </> :
                        <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className='result-data'>
                                <img src={assets.gemini_icon} alt="" />
                                {
                                    loading ? <div className='loader'>
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                        :
                                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>

                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here...' name="" id="" onChange={(e) => setInput(e.target.value)} value={input}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    onSent();

                                }
                            }} />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Made By Kuldeep Sahoo @2024
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main