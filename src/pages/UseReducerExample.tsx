import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (currentSate, action) => {
    switch (action.type) {
        case "increment":
            return { count: currentSate.count + 1 }
        
        case "decrement":
            return { count: currentSate.count - 1 }
        
    
        default:
            return currentSate;
    }
}

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <h1 className='text-center mb-2'>{state.count}</h1>
        <button onClick={()=>{dispatch({type:"increment"})}} className="mx-2 btn btn-outline btn-secondary">Increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}} className="mx-2 btn btn-outline btn-secondary">decrement</button>
      </div>
    );
};

export default UseReducerExample;