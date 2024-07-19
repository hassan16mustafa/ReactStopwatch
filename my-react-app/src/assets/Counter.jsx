import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    const decCount = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <p> Count is : {count} </p>
            <button onClick={updateCount}>UPdate COunt</button>
            <button onClick={decCount}>Decrease COunt</button>
            <button onClick={reset}>reset</button>
            

        </div>
    );
}

export default Counter;
