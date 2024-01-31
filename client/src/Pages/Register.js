import React from "react";

const Register = () => {
  return (
    <>
      <div id="login">
        <div className="login-page d-flex justify-content-center  align-items-center">
          <form action="" method="post">
            <div className="login-input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="login-input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="login-input">
              <input type="text" placeholder="Address" />
            </div>
            <div className="login-input">
              <input type="text" placeholder="Answer" />
            </div>
            <div className="login-input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="loginbtn">
              <div className="login-btn text-center">Register</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
