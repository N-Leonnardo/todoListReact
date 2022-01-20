import React, {useState} from "react";

const FunctionalComponent = ()=>{
    const [count, setCount] = useState("This is tab 1")

    const message1 = () => {
        setCount("This is tab 1")
}

    const message2 = () => {
        setCount("This is tab 2")
}

    const message3 = () => {
        setCount("This is tab 3")
}
    return(
        <div>
            <h1>Functional Component</h1>
            <button onClick={message1}>Tab 1</button>
            <button onClick={message2}>Tab 2</button>
            <button onClick={message3}>Tab 3</button>
            <p>{count}</p>
        </div>

    )
}
export default FunctionalComponent;