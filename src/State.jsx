import { useState } from "react";

export  function Counter ()
{
    const [Count,setCount] = useState(0)

    function IncreaseCount()
    {
        const newCount = Count + 1
        setCount(newCount)
    }

    function DecreaseCount()
    {
        const newCount = Count - 1
        setCount(newCount)
    }

    return <div>
        <h2>Counter: {Count}</h2>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Decrease</button>
    </div>
}