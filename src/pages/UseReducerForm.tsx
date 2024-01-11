import React, { useReducer } from 'react';

const initialState = { name:"", email:"" };

const reducer = (currentState, action) => {
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
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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