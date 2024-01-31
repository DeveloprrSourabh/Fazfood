import React, { useState } from "react";
import toast from "react-hot-toast";
const Register = () => {
  const host = "http://localhost:8000";
  const [crendentials, setCrendentials] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    answer: "",
  });
  const onChange = (e) => {
    setCrendentials({
      ...crendentials,
      [e.target.name]: e.target.value,
    });
  };
  // Register Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${host}/api/v1/auth/register`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(crendentials),
    });
    const data = await res.json();
    if (data) toast.success(data.message);
    else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <div id="login">
        <div className="login-page d-flex justify-content-center  align-items-center">
          <form action="" method="post">
            <div className="login-input">
              <input
                onChange={onChange}
                name="name"
                value={crendentials.name}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="login-input">
              <input
                name="email"
                value={crendentials.email}
                onChange={onChange}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="login-input">
              <input
                name="address"
                value={crendentials.address}
                onChange={onChange}
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="login-input">
              <input
                name="answer"
                value={crendentials.answer}
                onChange={onChange}
                type="text"
                placeholder="Answer"
              />
            </div>
            <div className="login-input">
              <input
                name="password"
                value={crendentials.password}
                onChange={onChange}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="loginbtn">
              <div onClick={handleSubmit} className="login-btn text-center">
                Register
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
