import React, { useEffect, useState, useRef } from "react";

function Stopwatch() {
    const [run, setRun] = useState(false);
    const [time, setTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (run) {
            startTimeRef.current = Date.now() - time; // Ensure the start time is set when the timer is running
            intervalIdRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 10); // Corrected setInterval to use 10 ms
            return () => {
                clearInterval(intervalIdRef.current); // Ensure clearInterval uses .current
            };
        }
    }, [run]); // Corrected dependency array to use 'run' instead of 'isRunning'

    function start() {
        setRun(true);
    }

    function stop() {
        setRun(false);
    }

    function reset() {
        setTime(0);
        setRun(false);
    }

    function formatTime() {
        let hours = Math.floor(time / (1000 * 3600));
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let seconds = Math.floor((time / 1000) % 60);
        let milli = Math.floor((time % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milli = String(milli).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milli}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;
