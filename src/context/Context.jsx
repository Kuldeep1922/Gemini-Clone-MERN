import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext()

const ContextProvider = (props) => {


    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        },75*index)
    }

    const onSent = async (prompt) => {
        setResultData("")
        setShowResult(true)
        setLoading(true)
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        const res = await run(input)
        let resArray = res.split("**")
        let newArray;
        for (let i = 0; i < resArray.length; i++){
            if (i === 0 || i % 2 != 1) {
                newArray += resArray[i];
            } else {
                newArray+="<b>"+resArray[i]+"</b>"
            }
        }
        let newRes2 = newArray.split("*").join("</br></br>")
        // setResultData(newRes2)
        let newResArray = newRes2.split(" ");
        for (let i = 0; i < newResArray.length; i++) {
            const nextWord=newResArray[i]
            delayPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")

    }
    // onSent("What is React Js")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;