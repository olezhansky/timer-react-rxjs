import React, { useState } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {

    const [seconds, setSeconds] = useState(0)



   const test = setInterval(() => {
    setSeconds(prevState => prevState + 1)
   }, 1000)

   const test2 = () => {
       clearInterval(test)
   }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Timer}>
                <div>
                    <p>00</p>
                    <h2>HH</h2>
                </div>
                <div>
                    <p>00</p>
                    <h2>MM</h2>
                </div>
                <div>
                    <p>{seconds}</p>
                    <h2>SS</h2>
                </div>
            </div>
            <div className={styles.ControlPanel}>
                <button onClick={test}>Start</button>
                <button onClick={test2}>Stop</button>
            </div>
        </div>
    )
}

export default Timer;