import React, {useState} from "react";

const Counter = ({initialValue = 0}) => {
    const [count, setCount] = useState(initialValue);
    return (
        <>
            Количество: <input value={count} readOnly={true}/>
            <button onClick={() => setCount(count + 1)}>Нажми</button>
        </>
    )
}

export default Counter;