import React, {useCallback, useEffect, useState} from "react";

const Counter = ({initialValue = 0}) => {
    const [count, setCount] = useState(initialValue);
    const onClick = useCallback(() => setCount(count + 1), [count]);

    // componentDidMount и componentDidUpdate
    //useEffect(() => {window.title = `Количество ${count}`});

    useEffect(() => {window.title = `Количество ${count}`}, [count])

    return (
        <>
            Количество: <input value={count} readOnly={true}/>
            <button onClick={onClick}>Нажми</button>
        </>
    )
}

export default Counter;