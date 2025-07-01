import React, { useState } from "react";

const Conditional = () => {
    // let login = true;
    // let hasSubscribed = true;

    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };

  return (
    <div className="h-[100vh] p-40 text-center">
        <div className="space-x-4">
           {count > 0 && ( 
            <button 
                className="px-4 py-1 rounded-md bg-red-400 hover:bg-red-200" 
                onClick={decrease}>
                    -
                </button>
            )}
            <span className="text-xl font-bold">{count}</span>
            <button className="px-4 py-1 rounded-md bg-green-400 hover:bg-green-300" onClick={increase}>+</button>
        </div>

     {/* {login !== true ?  <h1>Welcome back</h1> : <h1>Please Login</h1>} */}
        
     {/* {hasSubscribed && (
      <button className="border-[1px rounded-md bg-yellow-200 px-3 py-1 hover:bg-yellow-100">
        See premium content
      </button>
     )} */}
    </div>
 );
};

export default Conditional;