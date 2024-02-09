import React, { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const host = "http://localhost:8000";
  const [crendentials, setCrendentials] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setCrendentials({
      ...crendentials,
      [e.target.name]: e.target.value,
    });
  };
  // Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${host}/api/v1/auth/login`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(crendentials),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      navigate("/");
      setAuth({
        ...auth,
        user: data?.user,
        token: data?.token,
      });
      localStorage.setItem("auth", JSON.stringify(data));
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <Layout>
        <div id="login">
          <div className="login-page d-flex justify-content-center  align-items-center">
            <form action="" method="post">
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
                  name="password"
                  value={crendentials.password}
                  onChange={onChange}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="loginbtn">
                <div onClick={handleSubmit} className="login-btn text-center">
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
