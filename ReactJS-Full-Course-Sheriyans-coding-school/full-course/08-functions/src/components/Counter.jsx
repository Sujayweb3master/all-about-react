import { useState } from "react"

const Counter = () => {

    const [num, setNum] = useState(10)

    const btnClick = () => {
        setNum(prev => prev + 2)
        setNum(prev => prev + 2)
        setNum(prev => prev + 2)
    }

    return (
        <div>
            <div> {num} </div>
            <button onClick={btnClick} type="button"> update num</button>
        </div>
    )
}

export default Counter