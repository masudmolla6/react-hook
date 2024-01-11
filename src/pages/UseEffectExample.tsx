import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {

    const [hidden, setHidden] = useState(false);

    
    return (
      <div>
            <button onClick={() => setHidden((prev) => !prev)} className="btn btn-outline btn-secondary">{ hidden ? "Show":"Hidden"}</button>
            {!hidden && <Counter></Counter>}
      </div>
    );
};

const Counter = () => {
    
        const [count, setCount] = useState(0);

        useEffect(() => {
          const intervalId=setInterval(() => {
            console.log(count);
            setCount((prev) => prev + 1);
          }, 1000);

            return () => {
                clearInterval(intervalId)
            }
        }, []);

    return <h1 className='border border-red-500 p-10'>{count}</h1>;
}

export default UseEffectExample;