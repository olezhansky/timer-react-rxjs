import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {

  const TIME_BETWEEN_CLICKS = 300;

  //State for timer
  const [seconds, setSeconds] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  // State for wait between clicks
  const [waitCounter, setWaitCounter] = useState(0);
  const [isActiveWait, setIsActiveWait] = useState(false);
  const [amountClick, setAmountClick] = useState(0);

  // Interval between clicks
  useEffect(() => {
    let intervalBetweenClicks;
    if (isActiveWait) {
      intervalBetweenClicks = setInterval(() => {
        setWaitCounter(waitCounter => waitCounter + 10);
        if (waitCounter > TIME_BETWEEN_CLICKS) {
          setWaitCounter(0);
          setAmountClick(0);
        } 
      }, 10)
    }
    return () => clearInterval(intervalBetweenClicks);
  }, [isActiveWait, waitCounter, amountClick])

  // Timer interval
  useEffect(() => {
    let timerInterval;
    if (isActive) {
      timerInterval = setInterval(() => {
        const secondsCounter = Math.floor(counter % 3600 % 60);
        const minutesCounter = Math.floor(counter % 3600 / 60);
        const hoursCounter = Math.floor(counter / 3600);
        const calculatedSeconds = String(secondsCounter).length === 1 ? `0${secondsCounter}`: secondsCounter;
        const calculatedMinutes = String(minutesCounter).length === 1 ? `0${minutesCounter}`: minutesCounter;
        const calculatedHours = String(hoursCounter).length === 1 ? `0${hoursCounter}`: hoursCounter;
        setSeconds(calculatedSeconds);
        setMinutes(calculatedMinutes);
        setHours(calculatedHours);
        setCounter(counter => counter + 1);
      }, 1000)
    }
    return () => clearInterval(timerInterval);
  }, [isActive, counter])

  const handleStart = () => {
    setIsActive(true);
  }

  const handleStop = () => {
    setIsActive(false);
    setIsActiveWait(false);
    setWaitCounter(0);
    setCounter(0);
    setSeconds('00');
    setMinutes('00');
    setHours('00');
  }

  const handleWait = () => {
    setAmountClick(amountClick => amountClick + 1)
    if (amountClick >= 1 && waitCounter < TIME_BETWEEN_CLICKS) {
      setIsActive(false);
    }
    setIsActiveWait(true);
  }
  
  const handleReset = () => {
    setCounter(0);
    setSeconds('00');
    setMinutes('00');
    setHours('00');
    setIsActive(true)
  }

  return (
    <div className={styles.Wrapper}>
        <h2 className={styles.Title}>Timer React</h2>
        <div className={styles.Timer}>
            <div className={styles.Item}>
                <p>{hours}</p>
                <h2>Hours</h2>
            </div>
            <div className={styles.Item}>
                <p>{minutes}</p>
                <h2>Minutes</h2>
            </div>
            <div className={styles.Item}>
                <p>{seconds}</p>
                <h2>Seconds</h2>
            </div>
        </div>
        <div className={styles.ControlPanel}>
          <div >
            <button className={styles.ButtonStart} onClick={handleStart}>Start</button>
          </div>
          <div>
            <button className={styles.ButtonStop} onClick={handleStop}>Stop</button>
          </div>
          <div>
            <button className={styles.ButtonWait} onClick={handleWait}>Wait</button>
          </div>
          <div>
            <button className={styles.ButtonReset} onClick={handleReset}>Reset</button>
          </div>
        </div>
    </div>
  )
}

export default Timer;



