import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import moment from "moment"

function App() {
    const [time, setTime] = useState("")

    useEffect(() => {
        setInterval(() => {
            setTime(moment(1646735762823).fromNow())
        }, 1000)
    }, [])

    return <>
        <h1>Hello world!</h1>
        <p>Nothing is working as intended yet!</p>
        <p>{ time }</p>
    </>
}

ReactDOM.render(<App/>, document.body)