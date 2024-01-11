import React, { useState } from "react";

const UseStateExample = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [user, setUser] = useState({ name: "", email: "" });


    // console.log(name, email);

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(user);

    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {


      const inputName = e.target.name;
      const inputValue = e.target.value;

      setUser({...user, [inputName]: inputValue })

      console.log(user);
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
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                onChange={handleChange}
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
                  onChange={handleChange}
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

export default UseStateExample;