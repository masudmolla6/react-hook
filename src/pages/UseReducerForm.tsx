import React, { ChangeEvent, useReducer } from 'react';

type TAction = {
  type: string;
  payload: string;
}

const initialState = { name:"", email:"" };

const reducer = (currentState:typeof initialState, action:TAction) => {
    switch (action.type) {

        case 'addName':
            return {...currentState, name: action.payload }

        case 'addEmail':
            return {...currentState, email:action.payload }
        
        default:
            return currentState;
    }
}

const UseReducerForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event:ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
      console.log(state);
    }
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(event)=>dispatch({type:"addName", payload:event.target.value})}
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  name="email"
                  onChange={(event)=>dispatch({type:"addEmail", payload:event.target.value})}
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UseReducerForm;