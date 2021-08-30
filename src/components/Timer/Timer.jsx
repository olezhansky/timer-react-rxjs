// import React, { useState, useEffect } from 'react';
// import styles from './Timer.module.scss';

// const Timer = () => {

//     const [seconds, setSeconds] = useState('00');
//     const [minutes, setMinutes] = useState('00');
//     const [hours, setHours] = useState('00');
//     const [isActive, setIsActive] = useState(false);
//     const [counter, setCounter] = useState(3655)

//     const handleStart = () => {
//         setIsActive(true)
//     }
//     const handleStop = () => {
//         setIsActive(false)
//         setCounter(0);
//         setSeconds('00');
//         setMinutes('00')
//     }

//     useEffect(() => {
//     let intervalId;

//     if (isActive) {
//       intervalId = setInterval(() => {
//         const secondCounter = counter % 60;
//         let minuteCounter = Math.floor(counter / 60);
//         const hourCounter = Math.floor(counter / 3600);
//         const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
//         const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: (minuteCounter < 60 ? minuteCounter : `0${minuteCounter}` );
        
       
//         const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;

//         setSeconds(computedSecond);
//         setMinutes(computedMinute);
//         setHours(computedHour);

//         setCounter(counter => counter + 1);
//       }, 1000)
//     }

//     return () => clearInterval(intervalId);
//   }, [isActive, counter])


//     return (
//         <div className={styles.Wrapper}>
//             <div className={styles.Timer}>
//                 <div>
//                     <p>{hours}</p>
//                     <h2>HH</h2>
//                 </div>
//                 <div>
//                     <p>{minutes}</p>
//                     <h2>MM</h2>
//                 </div>
//                 <div>
//                     <p>{seconds}</p>
//                     <h2>SS</h2>
//                 </div>
//             </div>
//             <div className={styles.ControlPanel}>
//                 <button onClick={handleStart}>Start</button>
//                 <button onClick={handleStop}>Stop</button>
//             </div>
//         </div>
//     )
// }

// export default Timer;
import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {

  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };


 useEffect(() => {
    startTimer();
  });





    return (
        <div className={styles.Wrapper}>
            <div className={styles.Timer}>
                <div>
                    <p>{timerHours}</p>
                    <h2>HH</h2>
                </div>
                <div>
                    <p>{timerMinutes}</p>
                    <h2>MM</h2>
                </div>
                <div>
                    <p>{timerSeconds}</p>
                    <h2>SS</h2>
                </div>
            </div>
            <div className={styles.ControlPanel}>
                <button onClick={startTimer}>Start</button>
                {/* <button onClick={handleStop}>Stop</button> */}
            </div>
        </div>
    )
}

export default Timer;



