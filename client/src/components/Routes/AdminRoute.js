import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  const host = "http://localhost:8080";
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const checkAdmin = async () => {
      const res = await fetch(`${host}/api/v1/auth/admin-auth`, {
        method: "GET",
        headers: {
          Authorization: auth?.token,
        },
      });
      const data = await res.json();
      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      checkAdmin();
    }
  }, []);
  return ok ? <Outlet></Outlet> : "Loading...";
};

export default AdminRoute;
