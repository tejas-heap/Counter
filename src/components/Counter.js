import React, { useState, useEffect } from 'react'
import './Page.css'


const Counter = () => {
    const [count, setCount] = useState(0);
    const [fr, setFr] = useState(true)
    const [run, setRun] = useState(false);

    useEffect(() => {

        let interval = setInterval(() => {
            if (run && fr) {
                setCount(count + 1)
                console.log(count);
                if (count == 9) {
                    setFr(false);
                }
            }
            if (!fr && run) {
                setCount(count - 1);
                console.log(count);

                if (count == 1) {
                    setFr(true);
                }
            }

        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });



    const start = () => {
        setRun(true);
    }
    const stop = () => {
        setRun(false);
    }


    return (
        <>
            <div className='box'>
                <div>
                    <h1>Counter</h1>
                </div>
                <div>
                    <h2>{count}</h2>
                    <button onClick={start} style={{ backgroundColor: "green" }}>Start</button>
                    <button onClick={stop} style={{ backgroundColor: "red" }} >Stop</button>
                </div>
            </div>
        </>
    )
}

export default Counter