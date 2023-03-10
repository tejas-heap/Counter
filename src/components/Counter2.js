import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);


    const start = () => {
        setCount(count + 1)
    }
    const stop = () => {
        setCount(count - 1);
    }


    return (
        <div><>
            <h1>{count}</h1>
        </>
            <button onClick={start}>INC</button>
            <button onClick={stop}>DEC</button>

        </div>
    )
}

export default Counter