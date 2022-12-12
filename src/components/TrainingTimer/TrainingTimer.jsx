import s from './training-timer.module.scss';
import { useState, useEffect } from 'react';

const TrainingTimer = ({ exercises }) => {
  const [timer, setTimer] = useState({
    stopInterval: null,
    isVisible: false,
    time: 10,
  });
  const [session, setSession] = useState([]);

const {time, isVisible, stopInterval} = timer

  useEffect(() => {
    setSession(exercises);
  }, [exercises]);

  useEffect(() => {
    if (timer.time === 0) {
      timer.stopInterval();
    }
  }, [timer.time]);

  const formatTime = time => {
    const minutes =
      Number.parseInt(time / 60) < 10
        ? `0${Number.parseInt(time / 60)}`
        : Number.parseInt(time / 60);
    const seconds =
      time - minutes * 60 < 10
        ? `0${time - minutes * 60}`
        : time - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      if (timer.time === 0) {
        timer.stopInterval();
      }
      setTimer(prev => {
        return {
          ...prev,
          time: prev.time - 1,
        };
      });
    }, 1000);
    setTimer(prev => {
      return {
        ...prev,
        stopInterval: () => clearInterval(interval),
        isVisible: true,
      };
    });
  };

  return (
    <section className={s.section}>
      <div>
        <h3 className={s.title}>Let's train now</h3>
        <div className={s.exerciseBlock}>
          <div className={s.exercise}>
            <span className={s.name}>Exercise</span>
           {!isVisible && <span onClick={startTimer} className={s.btn}>
              Start
            </span>}
          </div>
         {isVisible && <div className={s.timer}>
            <span className={s.time}>{formatTime(timer.time)}</span>
            <span onClick={timer.stopInterval} className={s.btn}>
              Finish
            </span>
          </div>}
        </div>
        <div className={s.restBlock}>
          <span>00:45</span>
          <span className={s.btn}>Ok</span>
        </div>
        <div>
          <label>Enter actual repetitions number</label>
          <input type="number" />
        </div>
        <button>Finish exercise</button>
      </div>
    </section>
  );
};

export default TrainingTimer;
